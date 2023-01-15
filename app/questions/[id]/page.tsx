"use client";

import { RadioGroup } from "@headlessui/react";
import type { SetStateAction } from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getAnswer, getQuestion } from "../../../helpers/pocketbaseHelper";
import type { QuestionsResponse } from "../../../pocketbase-types";

const CHECKED_STYLE = "dark:text-black flex rounded-full pl-3 p-5 bg-blue-400";
const UNCHECKED_STYLE = "dark:text-black flex rounded-full pl-3 p-5 bg-blue-200";

interface QuestionPageParams {
  params: {
    id: string
  }
}

export default function QuestionPage({ params }: QuestionPageParams) {
  const [questionData, setQuestion] = useState<QuestionsResponse>();
  const [checkedAnswer, setCheckedAnswer] = useState<string>("");
  const [correct, setCorrect] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const getAndSetQuestion = async () => {
      const question = await getQuestion(params.id)
      setQuestion(question);
    };
    getAndSetQuestion();
  }, [params.id]);

  const handleCheck = (value: SetStateAction<string>) => {
    correct != undefined ? null : setCheckedAnswer(value)
  }


  const onSubmit = async (questionID: string) => {
    if (checkedAnswer === "") {
      alert("select something")
    } else {
      if (correct != undefined) {
        null
      } else {
        const answer = await getAnswer(questionID)
        setCorrect(checkedAnswer === answer.choice)
      }
    }
  }

  const MsgComponent = () => {
    if (correct === undefined) {
      return null
    }

    if (correct) {
      return <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: { duration: 0.5, delay: 0.1, ease: [0, 0.71, 0.2, 1.01] },
          scale: { type: "spring", damping: 10, stiffness: 100, restDelta: 0.001 }
        }}
        className="bg-green-300 p-2 w-2/3 rounded-xl dark:text-black">
        Correct answer!
      </motion.div>
    } else {
      return <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: { duration: 0.5, delay: 0.1, ease: [0, 0.71, 0.2, 1.01] },
          scale: { type: "spring", damping: 10, stiffness: 100, restDelta: 0.001 }
        }}
        className="bg-red-400 p-2 w-2/3 rounded-xl dark:text-black">
        Incorrect!
      </motion.div>
    }
  }

  const NavButton = (props: { text: string, routeToPath: string }) => {
    return <motion.button onClick={() => {
      console.log(props.routeToPath);
    }} whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white dark:hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      {props.text}
    </motion.button>
  }

  const NavButtons = () => {
    if (correct === undefined) {
      return null
    }

    if (correct) {
      return <NavButton text="Next" routeToPath="/questions/next" />
    } else {
      return null
    }
  }

  if (!questionData) {
    return <>Error: Missing question data</>
  }

  return (
    <div>
      <div className="flex flex-col items-center">
        <p className="font-bold">{questionData?.title}</p>
        <p className="py-5">{questionData?.body}</p>
        <MsgComponent />
        <RadioGroup value={checkedAnswer} onChange={(value: SetStateAction<string>) => handleCheck(value)} className="pt-3 flex flex-col w-2/3 space-y-3">
          <RadioGroup.Label>Pick an answer:</RadioGroup.Label>
          <motion.div whileHover={{ scale: 1.05 }} animate={{ x: checkedAnswer === "a1" ? 5 : 0 }} transition={{ ease: "easeInOut", duration: 0.3 }}>
            <RadioGroup.Option value="a1">
              {({ checked }) => (
                <span className={checked ? CHECKED_STYLE : UNCHECKED_STYLE}>
                  {questionData.a1}
                </span>
              )}
            </RadioGroup.Option>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} animate={{ x: checkedAnswer === "a2" ? 5 : 0 }} transition={{ ease: "easeInOut", duration: 0.3 }}>
            <RadioGroup.Option value="a2">
              {({ checked }) => (
                <span className={checked ? CHECKED_STYLE : UNCHECKED_STYLE}>
                  {questionData.a2}
                </span>
              )}
            </RadioGroup.Option>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} animate={{ x: checkedAnswer === "a3" ? 5 : 0 }} transition={{ ease: "easeInOut", duration: 0.3 }}>
            <RadioGroup.Option value="a3">
              {({ checked }) => (
                <span className={checked ? CHECKED_STYLE : UNCHECKED_STYLE}>
                  {questionData.a3}
                </span>
              )}
            </RadioGroup.Option>
          </motion.div>
        </RadioGroup>
        <div className="p-10">
          <NavButton text="Prev" routeToPath="/questions/prev" />
          <motion.button onClick={() => { onSubmit(questionData.id) }} whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} className="bg-transparent hover:bg-blue-500 text-blue-700  font-semibold hover:text-white dark:hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Submit
          </motion.button>
          <NavButtons />
        </div>
      </div >
    </div >
  );
}
