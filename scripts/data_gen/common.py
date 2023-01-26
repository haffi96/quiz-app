from typing import TypedDict


class FakeData(TypedDict):
    question: str
    answer: str
    options: list[str]


class QuestionData(TypedDict):
    title: str
    body: str
    a1: str
    a2: str
    a3: str
    a4: str
    answer: str


class QuestionSetsData(TypedDict):
    question_set_name: str
    question_set_data: list[QuestionData]


class AnswerData(TypedDict):
    correct_answer_choice: str
    question_id: int


class CoercedData(TypedDict):
    question_set_name: str
    all_questions_data: list[QuestionData]
    all_answers_data: list[AnswerData]
