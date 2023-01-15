"use client";

import { RadioGroup } from "@headlessui/react";
import { useEffect, useState } from "react";
import type { QuestionData } from "../../../types";
import { motion } from "framer-motion";
import { getQuestion } from "../../../helpers/databaseHelper";

const CHECKED_STYLE = "pl-3 p-5 bg-blue-400 dark:bg-red-500 rounded-full flex";
const UNCHECKED_STYLE = "pl-3 p-5 bg-blue-200 dark:bg-red-300 rounded-full flex";

interface QuestionPageParams {
  params: {
    id: string
  }
}

export default function QuestionPage({ params }: QuestionPageParams) {
  const [questionData, setQuestion] = useState<QuestionData>();
  const [checkedAnswer, setCheckedAnswer] = useState<string>("");
  const [correct, setCorrect] = useState<boolean>();

  useEffect(() => {
    const getAndSetQuestion = async () => {
      const question = await getQuestion(params.id)
      setQuestion(question);
    };
    getAndSetQuestion();
  }, [params.id]);

  const onSubmit = async () => {
    console.log("Submit to check answer");
    const questionID = "2mvoha667fuda6h";
    const res = await fetch(
      `${process.env.PB_API}/collections/answers/records?perPage=30&filter=(question_id='${questionID}')`,
    );
    const data = await res.json();
    const answer = data.items[0].choice
    setCorrect(checkedAnswer === answer)
    // TODO: go to next question
  }

  return (
    <div>
      <div className="flex flex-col items-center">
        <p className="font-bold">{questionData?.title}</p>
        <p className="py-5">{questionData?.body}</p>
        <RadioGroup value={checkedAnswer} onChange={setCheckedAnswer} className="pt-3 flex flex-col w-2/3 space-y-3">
          <RadioGroup.Label>Pick an answer:</RadioGroup.Label>
          <motion.div whileHover={{ scale: 1.05 }} animate={{ x: checkedAnswer === "a1" ? 5 : 0 }} transition={{ ease: "easeInOut", duration: 0.3 }}>
            <RadioGroup.Option value="a1">
              {({ checked }) => (
                <span className={checked ? CHECKED_STYLE : UNCHECKED_STYLE}>
                  {questionData?.choices.a1}
                </span>
              )}
            </RadioGroup.Option>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} animate={{ x: checkedAnswer === "a2" ? 5 : 0 }} transition={{ ease: "easeInOut", duration: 0.3 }}>
            <RadioGroup.Option value="a2">
              {({ checked }) => (
                <span className={checked ? CHECKED_STYLE : UNCHECKED_STYLE}>
                  {questionData?.choices.a2}
                </span>
              )}
            </RadioGroup.Option>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} animate={{ x: checkedAnswer === "a3" ? 5 : 0 }} transition={{ ease: "easeInOut", duration: 0.3 }}>
            <RadioGroup.Option value="a3">
              {({ checked }) => (
                <span className={checked ? CHECKED_STYLE : UNCHECKED_STYLE}>
                  {questionData?.choices.a3}
                </span>
              )}
            </RadioGroup.Option>
          </motion.div>
        </RadioGroup>
        <div className="p-10">
          <motion.button onClick={onSubmit} whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} className="bg-transparent hover:bg-blue-500 dark:hover:bg-red-500 text-blue-700 dark:text-red-700 font-semibold hover:text-white dark:hover:text-white py-2 px-4 border border-blue-500 dark:border-red-500 hover:border-transparent rounded">
            Submit
          </motion.button>
        </div>
      </div>
    </div>
  );
}
