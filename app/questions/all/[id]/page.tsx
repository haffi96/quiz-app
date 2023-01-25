"use client";

import { RadioGroup } from "@headlessui/react";
import type { SetStateAction } from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getAnswerByQuestionId, getNextQuestionId, getPreviousQuestionId, getQuestionById } from "../../../../helpers/supabase-helpers";
import { RadioGroupOptionWithMotion } from "../../../../components/RadioGroupOptionWithMotion";
import type { Database } from "../../../../lib/database.types";
import { useRouter } from "next/navigation";
import { Routes } from "../../../../Routes";

interface QuestionPageParams {
  params: {
    id: number
  }
}

// plaveholders so that while the data is being fetched it looks a little better
// but debatable
const QUESTION_TITLE_PLACEHOLDER = 'Question'
const QUESTION_BODY_PLACEHOLDER = 'Question Description'

export default function AllQuestionPage({ params }: QuestionPageParams) {
  const router = useRouter();
  const [questionData, setQuestion] = useState<Database["public"]["Tables"]["questions"]["Row"]>();
  const [nextQuestionId, setNextQuestionId] = useState<number>();
  const [previousQuestionId, setPreviousQuestionId] = useState<number>();
  const [isLoaded, setIsLoaded] = useState<boolean>();
  const [checkedAnswer, setCheckedAnswer] = useState<Database["public"]["Enums"]["answer_choices"]>('a1');
  const [correct, setCorrect] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const getAndSetNextQuestionId = async () => {
      if (questionData) {
        setNextQuestionId(await getNextQuestionId(questionData.id));
      }
    }

    const getAndSetPreviousQuestionId = async () => {
      if (questionData) {
        setPreviousQuestionId(await getPreviousQuestionId(questionData.id));
      }
    }

    getAndSetNextQuestionId();
    getAndSetPreviousQuestionId();
  }, [questionData])

  useEffect(() => {
    const getAndSetQuestion = async () => {
      const question = await getQuestionById(params.id)
      setQuestion(question);
      setIsLoaded(true);
    };
    getAndSetQuestion();
  }, [params.id]);

  const handleCheck = (value: SetStateAction<Database["public"]["Enums"]["answer_choices"]>) => {
    correct != undefined ? null : setCheckedAnswer(value)
  }

  const onSubmit = async (questionID: number) => {
    if (!checkedAnswer) {
      alert("select something")
    } else {
      if (correct != undefined) {
        null
      } else {
        const answer = await getAnswerByQuestionId(questionID)
        setCorrect(checkedAnswer === answer?.correct_answer_choice)
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
        className="w-2/3 rounded-xl bg-green-300 p-2 dark:text-black">
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
        className="w-2/3 rounded-xl bg-red-400 p-2 dark:text-black">
        Incorrect!
      </motion.div>
    }
  }

  const NavButton = (props: { text: string, routeToPath?: string }) => {
    return <motion.button onClick={() => {
      if (props.routeToPath) {
        router.push(`${Routes.QUESTIONS_ALL}/${props.routeToPath}`)
      }
    }} whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} className="rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white dark:hover:text-white">
      {props.text}
    </motion.button>
  }

  const NavButtons = () => {
    if (correct === undefined) {
      return null
    }

    if (correct && nextQuestionId) {
      return <NavButton text="Next" routeToPath={nextQuestionId.toString()} />
    } else {
      return null
    }
  }

  if (isLoaded && !questionData) {
    return <>Error: Missing question data</>
  }

  return (
    <div className="container m-auto">
      <div className="flex flex-col items-center">
        <p className="font-bold">{questionData?.title ?? QUESTION_TITLE_PLACEHOLDER}</p>
        <p className="py-5">{questionData?.body ?? QUESTION_BODY_PLACEHOLDER}</p>
        <MsgComponent />
        <RadioGroup value={checkedAnswer} onChange={(value: SetStateAction<Database["public"]["Enums"]["answer_choices"]>) => handleCheck(value)} className="flex w-2/3 flex-col space-y-3 pt-3">
          <RadioGroup.Label>Pick an answer:</RadioGroup.Label>
          <RadioGroupOptionWithMotion checkedAnswer={checkedAnswer} answerText={'A) ' + (questionData?.a1 ?? '')} thisAnswerChoice={"a1"} />
          <RadioGroupOptionWithMotion checkedAnswer={checkedAnswer} answerText={'B) ' + (questionData?.a2 ?? '')} thisAnswerChoice={"a2"} />
          <RadioGroupOptionWithMotion checkedAnswer={checkedAnswer} answerText={'C) ' + (questionData?.a3 ?? '')} thisAnswerChoice={"a3"} />
          <RadioGroupOptionWithMotion checkedAnswer={checkedAnswer} answerText={'D) ' + (questionData?.a4 ?? '')} thisAnswerChoice={"a4"} />
        </RadioGroup>
        <div className="p-10">
          <NavButton text="Prev" routeToPath={previousQuestionId?.toString()} />
          <motion.button onClick={() => { questionData ? onSubmit(questionData.id) : {} }} whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} className="rounded border border-blue-500  bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white dark:hover:text-white">
            Submit
          </motion.button>
          <NavButtons />
        </div>
      </div >
    </div>
  );
}
