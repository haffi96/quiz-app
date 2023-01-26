import { RadioGroup } from "@headlessui/react";
import { motion } from "framer-motion";
import type { SetStateAction } from "react";
import { useState, useEffect } from "react";
import { getNextQuestionId, getPreviousQuestionId, getQuestionById, getAnswerByQuestionId, getQuestionSetNameById } from "../../helpers/supabase-helpers";
import type { Database } from "../../lib/database.types";
import { Routes } from "../../Routes";
import { CorrectOrIncorrectPopUp } from "../popUps/CorrectOrIncorrectPopUp";
import { RadioGroupOptionWithMotion } from "../RadioGroupOptionWithMotion";
import { NavButton } from "./NavButton";
import { NextButton } from "./NextButton";

interface MultipleChoiceQuestionAndAnswerParams {
    question_id: number,
    questionSetId?: number
}

export function MultipleChoiceQuestionAndAnswer({ question_id, questionSetId }: MultipleChoiceQuestionAndAnswerParams) {
    const [questionData, setQuestion] = useState<Database["public"]["Tables"]["questions"]["Row"]>();
    const [questionSetName, setQuestionSetName] = useState<Database["public"]["Tables"]["question_sets"]["Row"]["name"]>();
    const [nextQuestionId, setNextQuestionId] = useState<number>();
    const [previousQuestionId, setPreviousQuestionId] = useState<number>();
    const [isLoaded, setIsLoaded] = useState<boolean>();
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

    const getAndSetNextQuestionId = async (questionId: number, questionSetId?: number) => {
        setNextQuestionId(await getNextQuestionId(questionId));

        if (questionSetId) {
            setNextQuestionId(await getNextQuestionId(questionId, questionSetId));
        }
    }

    const getAndSetPreviousQuestionId = async (questionId: number, questionSetId?: number) => {
        setPreviousQuestionId(await getPreviousQuestionId(questionId));
        if (questionSetId) {
            setPreviousQuestionId(await getPreviousQuestionId(questionId, questionSetId));
        }
    }

    const getAndSetQuestion = async (id: number) => {
        const question = await getQuestionById(id)
        setQuestion(question);
        setIsLoaded(true);
    };

    useEffect(() => {
        if (questionData) {
            getAndSetNextQuestionId(questionData.id, questionSetId);
            getAndSetPreviousQuestionId(questionData.id, questionSetId);
        }
    }, [questionData, questionSetId])

    useEffect(() => {
        getAndSetQuestion(question_id);
    }, [question_id]);

    useEffect(() => {
        if (questionSetId) {
            const getAndSetQuestionSetName = async () => { setQuestionSetName(await getQuestionSetNameById(questionSetId)) };
            getAndSetQuestionSetName()
        }
    })

    if (isLoaded && !questionData) {
        return <>Error: Missing question data</>
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