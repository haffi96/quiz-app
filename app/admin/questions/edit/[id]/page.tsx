"use client"

import { updateQuestionById, getQuestionById, deleteQuestionById, getAnswerByQuestionId, updateAnswerByAnswerId, createAnswer, deleteAnswerByQuestionId } from "../../../../../utils/supabaseHelper"
import type { FormEvent } from "react";
import { useEffect, useState } from "react"
import { QuestionForm } from "../../../../../components/forms/QuestionForm";
import { useRouter } from "next/navigation";
import { Routes } from "../../../../../enums/Routes";
import { useQuestionFormInputs } from "../../../../../hooks/useQuestionFormInputs";

interface EditIdParams {
    params: { id: number }
}

export default function Page({ params }: EditIdParams) {
    const router = useRouter();
    const [answerId, setAnswerId] = useState<number>()
    const {
        title, setTitle, body, setBody, a1, setA1, a2, setA2,
        a3, setA3, a4, setA4, correctAnswer, setCorrectAnswer, question_set, set_question_set
    } = useQuestionFormInputs();

    const { id } = params

    useEffect(() => {
        const getQuestionAndSetFields = async () => {
            const question = await getQuestionById(id)
            if (question) {
                setTitle(question.title);
                setBody(question.body);
                setA1(question.a1);
                setA2(question.a2);
                setA3(question.a3);
                setA4(question.a4);
                set_question_set(question.question_set)
            } else {
                router.push(Routes.NEW_QUESTION)
            }
        };

        const getAndSetAnswers = async () => {
            try {
                const answer = await getAnswerByQuestionId(id);
                if (answer) {
                    setAnswerId(answer.id);
                    setCorrectAnswer(answer.correct_answer_choice);
                } else {
                    const createdAnswer = await createAnswer({ question_id: id, correct_answer_choice: 'a1' })

                    if (createdAnswer) {
                        setAnswerId(createdAnswer.id);
                        setCorrectAnswer(createdAnswer.correct_answer_choice);
                    }
                }
            } catch {
                throw new Error('failed to update or create answer')
            }
        }

        getQuestionAndSetFields();
        getAndSetAnswers();
    }, [id, router, setA1, setA2, setA3, setA4, setBody, setCorrectAnswer, setTitle, set_question_set]);

    const handleSubmit = async (event: FormEvent) => {
        if (!title || !body || !a1 || !a2 || !a3 || !a4 || !question_set) {
            alert('Missing data')
        }

        const finalQuestion = { title, body, a1, a2, a3, a4, question_set }
        event.preventDefault();

        try {
            await updateQuestionById(id, finalQuestion);

            if (answerId) {
                await updateAnswerByAnswerId(answerId, { correct_answer_choice: correctAnswer, question_id: id });
            }
            else {
                await createAnswer({ question_id: id, correct_answer_choice: correctAnswer })
            }

            alert('Saved question and answer')
        }

        catch {
            console.error('Failed to save question/ answer')
        }
    }

    const handleDelete = async () => {
        await deleteQuestionById(id);
        await deleteAnswerByQuestionId(id);
        alert('Deleted Question')
        router.push(Routes.NEW_QUESTION)
    }

    return (
        <QuestionForm
            title={title}
            setTitle={setTitle}
            body={body}
            setBody={setBody}
            a1={a1} setA1={setA1}
            a2={a2} setA2={setA2}
            a3={a3} setA3={setA3}
            a4={a4} setA4={setA4}
            correctAnswer={correctAnswer}
            setCorrectAnswer={setCorrectAnswer}
            question_set={question_set}
            set_question_set={set_question_set}
            handleSubmit={handleSubmit}
            handleDelete={handleDelete} />
    )
}

