'use client'

import { RadioGroup } from "@headlessui/react";
import { motion } from "framer-motion";
import type { SetStateAction } from "react";
import { useState } from "react";
import { getAnswerByQuestionId } from "../../helpers/supabase-helpers";
import type { Database } from "../../lib/database.types";
import { Routes } from "../../enums/Routes";
import { CorrectOrIncorrectPopUp } from "../popUps/CorrectOrIncorrectPopUp";
import { RadioGroupOptionWithMotion } from "../RadioGroupOptionWithMotion";
import { NavButton } from "./NavButton";
import { NextButton } from "./NextButton";

export interface MultipleChoiceQuestionAndAnswerParams {
    questionId?: number
    questionSetId?: number,
    questionData?: Database["public"]["Tables"]["questions"]["Row"],
    questionSetName?: Database["public"]["Tables"]["question_sets"]["Row"]["name"],
    nextQuestionId?: number,
    previousQuestionId?: number,
    isLoading?: boolean,
}

export function MultipleChoiceQuestionAndAnswer({
    questionId,
    questionSetId,
    questionData,
    questionSetName,
    nextQuestionId,
    previousQuestionId,
    isLoading
}: MultipleChoiceQuestionAndAnswerParams) {
    if (!isLoading && !questionData) {
        throw new Error(`No Question Data for question with id ${questionId}`)
    }

    const [checkedAnswer, setCheckedAnswer] = useState<Database["public"]["Enums"]["answer_choices"]>('a1');
    const [correct, setCorrect] = useState<boolean | undefined>(undefined);

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

    const previousQuestionRouteToPath = questionSetId ? `${Routes.QUESTION_SETS}/${questionSetId}/${previousQuestionId}` : `${Routes.QUESTIONS_ALL}/${previousQuestionId}`
    const nextQuestionRouteToPath = questionSetId ? `${Routes.QUESTION_SETS}/${questionSetId}/${nextQuestionId}` : `${Routes.QUESTIONS_ALL}/${nextQuestionId}`
    const showBodyIfNotTheSameAsTitle = () => questionData?.title !== questionData?.body && (<p className="py-5">{questionData?.body}</p>)

    return (
        <div className="container m-auto">
            <div className="flex flex-col items-center">
                <p className="py-5 text-5xl font-bold">{questionSetName ?? ''}</p>
                <p className="py-5">{questionData?.title ?? ''}</p>
                {showBodyIfNotTheSameAsTitle()}
                <CorrectOrIncorrectPopUp correct={correct} />
                <RadioGroup value={checkedAnswer} onChange={(value: SetStateAction<Database["public"]["Enums"]["answer_choices"]>) => handleCheck(value)} className="flex w-2/3 flex-col space-y-3 pt-3">
                    <RadioGroup.Label>Pick an answer:</RadioGroup.Label>
                    <RadioGroupOptionWithMotion checkedAnswer={checkedAnswer} answerText={'A) ' + (questionData?.a1 ?? '')} thisAnswerChoice={"a1"} />
                    <RadioGroupOptionWithMotion checkedAnswer={checkedAnswer} answerText={'B) ' + (questionData?.a2 ?? '')} thisAnswerChoice={"a2"} />
                    <RadioGroupOptionWithMotion checkedAnswer={checkedAnswer} answerText={'C) ' + (questionData?.a3 ?? '')} thisAnswerChoice={"a3"} />
                    <RadioGroupOptionWithMotion checkedAnswer={checkedAnswer} answerText={'D) ' + (questionData?.a4 ?? '')} thisAnswerChoice={"a4"} />
                </RadioGroup>
                <div className="p-10">
                    <NavButton text="Prev" routeToPath={previousQuestionRouteToPath} />
                    <motion.button onClick={() => { questionData ? onSubmit(questionData.id) : {} }} whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} className="rounded border border-blue-500  bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white dark:hover:text-white">
                        Submit
                    </motion.button>
                    <NextButton correct={correct} routeToPath={nextQuestionRouteToPath} />
                </div>
            </div >
        </div>
    );
}