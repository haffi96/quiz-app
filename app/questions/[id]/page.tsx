"use client";

import { RadioGroup } from "@headlessui/react";
import type { SetStateAction } from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getAnswerByQuestionId, getQuestionById } from "../../../helpers/pocketbaseHelper";
import type { QuestionsResponse } from "../../../pocketbase-types";
import { RadioGroupOptionWithMotion } from "../../../components/RadioGroupOptionWithMotion";

interface QuestionPageParams {
  params: {
    id: string
  }
}

export type CheckedAnswer = 'a1' | 'a2' | 'a3' | 'a4' | '';

export default function QuestionPage({ params }: QuestionPageParams) {
  const [questionData, setQuestion] = useState<QuestionsResponse>();
  const [checkedAnswer, setCheckedAnswer] = useState<CheckedAnswer>("");
  const [correct, setCorrect] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const getAndSetQuestion = async () => {
      const question = await getQuestionById(params.id)
      setQuestion(question);
    };
    getAndSetQuestion();
  }, [params.id]);

  const handleCheck = (value: SetStateAction<CheckedAnswer>) => {
    correct != undefined ? null : setCheckedAnswer(value)
  }


  const onSubmit = async (questionID: string) => {
    if (checkedAnswer === "") {
      alert("select something")
    } else {
      if (correct != undefined) {
        null
      } else {
        const answer = await getAnswerByQuestionId(questionID)
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

  if (!questionData) { // TODO: replace this with loading screen
    return <>Error: Missing question data</>
  }

  return (
    <div>
      <div className="flex flex-col items-center">
        <p className="font-bold">{questionData?.title}</p>
        <p className="py-5">{questionData?.body}</p>
        <MsgComponent />
        <RadioGroup value={checkedAnswer} onChange={(value: SetStateAction<CheckedAnswer>) => handleCheck(value)} className="pt-3 flex flex-col w-2/3 space-y-3">
          <RadioGroup.Label>Pick an answer:</RadioGroup.Label>
          <RadioGroupOptionWithMotion checkedAnswer={checkedAnswer} answerText={questionData.a1} thisAnswerChoice="a1" />
          <RadioGroupOptionWithMotion checkedAnswer={checkedAnswer} answerText={questionData.a2} thisAnswerChoice="a2" />
          <RadioGroupOptionWithMotion checkedAnswer={checkedAnswer} answerText={questionData.a3} thisAnswerChoice="a3" />
          <RadioGroupOptionWithMotion checkedAnswer={checkedAnswer} answerText={questionData.a4} thisAnswerChoice="a4" />
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

