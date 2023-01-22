"use client"

import { updateQuestionById, getQuestionById, deleteQuestionById, getAnswerByQuestionId, updateAnswerByAnswerId, createAnswer, deleteAnswerByQuestionId } from "../../../../../helpers/supabase-helpers"
import type { FormEvent } from "react";
import { useEffect, useState } from "react"
import { QuestionForm } from "../../../../../components/forms/QuestionForm";
import type { Database } from "../../../../../lib/database.types";
import { useRouter } from "next/navigation";
import { Routes } from "../../../../../Routes";

interface EditIdParams {
    params: { id: number }
}

export default function Page({ params }: EditIdParams) {
    const router = useRouter();
    const [title, setTitle] = useState<string>('')
    const [body, setBody] = useState<string>('')
    const [a1, setA1] = useState<string>('')
    const [a2, setA2] = useState<string>('')
    const [a3, setA3] = useState<string>('')
    const [a4, setA4] = useState<string>('')
    const [correctAnswer, setCorrectAnswer] = useState<Database["public"]["Enums"]["answer_choices"]>('a1')
    const [answerId, setAnswerId] = useState<number>()

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
                    alert('missing answer')
                }
            } catch { // maybe the question didn't already have an answer
                console.warn('in catch')

                const answer = await createAnswer({ question_id: id, correct_answer_choice: 'a1' })

                if (answer) {
                    setAnswerId(answer.id);
                    setCorrectAnswer(answer.correct_answer_choice);
                }
            }
        }

        getQuestionAndSetFields();
        getAndSetAnswers();
    }, [id, router]);

    const handleSubmit = async (event: FormEvent) => {
        const finalQuestion = { title, body, a1, a2, a3, a4 }
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
        <QuestionForm title={title} setTitle={setTitle} body={body} setBody={setBody} a1={a1} setA1={setA1} a2={a2} setA2={setA2} a3={a3}
            setA3={setA3} a4={a4} setA4={setA4} correctAnswer={correctAnswer} setCorrectAnswer={setCorrectAnswer}
            handleSubmit={handleSubmit} handleDelete={handleDelete} />
    )
}

