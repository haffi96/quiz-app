import csv
from datetime import datetime
import logging
import os
import time
from typing import Generator
from question_data import question_sets_data
from common import QuestionData, AnswerData, CoercedData

import psycopg2

from datetime import timezone

TSV_BASE_DIR = "./tmp_tsvs"
DB_CONNECTION_URI = os.environ["DB_CONNECTION_URI"]

# Force question_sets_data dict to always be ordered FIXME


def id_generator(starting_num: int = 0) -> Generator[int, None, None]:
    num = starting_num
    while True:
        yield num
        num += 1


execution_order = id_generator(1)


def coerce_data(
    question_set_name: str, question_set_data: list[QuestionData]
) -> CoercedData:
    all_answers_data: list[AnswerData] = []
    all_questions_data: list[QuestionData] = []
    for index, data in enumerate(question_set_data):
        parsed_question_data = QuestionData(
            title=data["question"],
            body=data["question"],
            a1=data["options"][0],
            a2=data["options"][1],
            a3=data["options"][2],
            a4=data["options"][3],
            answer=data["answer"],
        )

        for option in (
            parsed_question_data["a1"],
            parsed_question_data["a2"],
            parsed_question_data["a3"],
            parsed_question_data["a4"],
        ):
            if data["answer"] == option:
                answer_key = [
                    k for k, v in parsed_question_data.items() if v == option
                ][0]
                parsed_answer_data = AnswerData(
                    correct_answer_choice=answer_key, question_id=index + 1
                )
        all_answers_data.append(parsed_answer_data)
        all_questions_data.append(parsed_question_data)

    return CoercedData(
        question_set_name=question_set_name,
        all_questions_data=all_questions_data,
        all_answers_data=all_answers_data,
    )


class DataGenerator:
    def __init__(
        self,
    ) -> None:
        self.now = datetime.now(timezone.utc)

    def question_set_generator(self) -> list:
        """Generates questions sets"""
        question_sets_list = list(question_sets_data.keys())

        return [
            [
                index + 1,  # id
                self.now,  # created_at
                self.now,  # updated_at
                set_name,  # name
                "",  # subscribed_to_by
            ]
            for index, set_name in enumerate(question_sets_list)
        ]

    def questions_generator(self) -> list:
        """Generates questions"""
        question_id = id_generator()
        questions = []
        for index, (question_set_name, question_set_data) in enumerate(
            question_sets_data.items()
        ):
            coerced_data = coerce_data(question_set_name, question_set_data)
            questions.extend(
                [
                    next(question_id) + 1,  # id
                    data["title"],  # title
                    data["body"],  # body
                    data["a1"],  # a1
                    data["a2"],  # a2
                    self.now,  # created_at
                    self.now,  # updated_at
                    data["a3"],  # a3
                    data["a4"],  # a4
                    index + 1,  # question_set
                ]
                for data in coerced_data["all_questions_data"]
            )
        return questions

    def answers_generator(self) -> list:
        """Generates answers with the right question_id"""
        answer_id = id_generator(1)
        question_id = id_generator(1)
        answers = []
        for question_set_name, question_set_data in question_sets_data.items():
            coerced_data = coerce_data(question_set_name, question_set_data)
            answers.extend(
                [
                    [
                        next(answer_id),  # id
                        self.now,  # created_at
                        answer["correct_answer_choice"],  # correct_answer_choice
                        next(question_id),  # question_id
                    ]
                    for answer in coerced_data["all_answers_data"]
                ]
            )
        return answers


class DBTasks:
    def repopulate_all_databases(self) -> None:
        tsv_file = list(self.all_tsv_info)
        self.truncate_and_repopulate_all_tables(
            tsv_info_list=tsv_file, db_name="postgres"
        )

    @staticmethod
    def truncate_and_repopulate_all_tables(tsv_info_list: list, db_name: str) -> None:
        logging.info(f"{db_name.upper()}: Starting database re-population ...")

        con = psycopg2.connect(DB_CONNECTION_URI)
        con.autocommit = True

        for tsv_info in tsv_info_list:

            cursor = con.cursor()
            table_name = tsv_info["table"]
            file_name = tsv_info["filename"]

            # TRUNCATE
            logging.info(f"{db_name.upper()}: {table_name}: Truncating")
            truncate_statement = f'TRUNCATE "{table_name}" CASCADE'
            cursor.execute(truncate_statement)
            logging.info(f"{db_name.upper()}: {table_name}: truncated")

            # VACUUM - Update stuff
            cursor = con.cursor()
            cursor.execute(f"VACUUM FULL {table_name}")
            logging.info(f"{db_name.upper()}: {table_name}: Vaccumed")

            # UPLOAD
            logging.info(f"{db_name.upper()}: {table_name}: Copying table")
            with open(os.path.join(TSV_BASE_DIR, file_name), encoding="utf-8") as file:
                cursor.copy_from(file, table_name, sep="\t", null="NULL")
            logging.info(f"{db_name.upper()}: {table_name}: Uploaded data")

            # UPDATE TABLE SEQUENCE AFTER UPLOAD
            logging.info(f"{db_name.upper()}: {table_name}: Updating Sequences")
            cursor = con.cursor()
            cursor.execute(
                f"SELECT setval('{table_name}_id_seq', COALESCE((SELECT MAX(id)+1 FROM {table_name}), 1), false);"
            )
            logging.info(f"{db_name.upper()}: {table_name}: Updated sequence")

        con.close()
        logging.info(f"{db_name.upper()}: Successfully re-populated")

    @property
    def all_tsv_info(self) -> list:
        tsv_data = []

        for tsv in [f for f in os.listdir(TSV_BASE_DIR) if f[-4:] == ".tsv"]:
            tsv_parts = tsv.replace(".tsv", "").split("-")
            tsv_data.append(
                {
                    "filename": tsv,
                    "db": tsv_parts[1],
                    "table": tsv_parts[3],
                    "order": int(tsv_parts[2]),
                }
            )

        tsv_data.sort(key=lambda i: i["order"])

        return tsv_data


class TSVHandler:
    def __init__(self) -> None:
        self.generator = DataGenerator()

    def create_tsv_files(self) -> None:
        #  TABLE DATA GENERATION
        self.write_to_tsv(
            self.generator.question_set_generator(), "postgres", table="question_sets"
        )
        self.write_to_tsv(
            self.generator.questions_generator(), "postgres", table="questions"
        )
        self.write_to_tsv(
            self.generator.answers_generator(), "postgres", table="answers"
        )

    @staticmethod
    def write_to_tsv(data: list, db_name: str, table: str) -> None:
        execute_id = next(execution_order)

        if not os.path.isdir(TSV_BASE_DIR):
            os.mkdir(TSV_BASE_DIR)

        tsv_name = os.path.join(TSV_BASE_DIR, f"tsv-{db_name}-{execute_id}-{table}.tsv")

        with open(tsv_name, "w+", encoding="utf-8") as file:
            tsv_writer = csv.writer(
                file,
                delimiter="\t",
                quoting=csv.QUOTE_NONE,
                # escapechar="",
                # quotechar="",
            )
            tsv_writer.writerows(data)

        logging.info(f"Wrote tsv {tsv_name}")


def populate_all() -> None:
    #  Create all tsvs
    start_time = time.time()
    TSVHandler().create_tsv_files()
    logging.info(
        f"All tsvs successfully generated in {time.time() - start_time} seconds"
    )

    #  Repopulate all dbs
    logging.info("Attempting upload of all tsvs")
    start_time = time.time()
    DBTasks().repopulate_all_databases()
    logging.info(
        f"All tsvs successfully uploaded in {time.time() - start_time} seconds"
    )


if __name__ == "__main__":
    populate_all()
