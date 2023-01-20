"use client"

import { updateQuestionById, getQuestionById, createQuestion, deleteQuestionById, getAnswerByQuestionId, updateAnswerByAnswerId, createAnswer, deleteAnswerByQuestionId } from "../../../../../helpers/supabase-helpers"
import type { FormEvent } from "react";
import { useEffect, useState } from "react"
import Link from "next/link";
import { AnswersCorrectAnswerChoiceOptions } from "../../../../../supabase-types";

// TODO: add validation to every field

interface EditIdParams {
    params: { id: number }
}
export default function Page({ params }: EditIdParams) {
    const [title, setTitle] = useState<string>('')
    const [body, setBody] = useState<string>('')
    const [a1, setA1] = useState<string>('')
    const [a2, setA2] = useState<string>('')
    const [a3, setA3] = useState<string>('')
    const [a4, setA4] = useState<string>('')
    const [correctAnswer, setCorrectAnswer] = useState<any>()
    const [answerId, setAnswerId] = useState<number>()
    const [newQuestion, setNewQuestion] = useState<boolean>(false)

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
                setNewQuestion(true)
            }
        };

        const getAndSetAnswers = async () => {
            try {
                const answer = await getAnswerByQuestionId(id);
                setAnswerId(answer?.id);
                setCorrectAnswer(answer?.correct_answer_choice);
            } catch { // the question didn't alreay have an answer
                const answer = await createAnswer({ question_id: id, correct_answer_choice: AnswersCorrectAnswerChoiceOptions.a1 })
                if (answer) {
                    setAnswerId(answer.id);
                    setCorrectAnswer(answer.correct_answer_choice);
                }
            }
        }

        getQuestionAndSetFields();

        if (!newQuestion) {
            getAndSetAnswers();
        }
    }, [id, newQuestion]);

    const clearAllFields = () => {
        setTitle('');
        setBody('');
        setA1('');
        setA2('');
        setA3('');
        setA4('');
    }

    const handleSubmit = async (event: FormEvent) => {
        const finalQuestion = { title, body, a1, a2, a3, a4 }
        event.preventDefault();

        try {
            if (newQuestion) {
                const question = await createQuestion(finalQuestion)
                question && await createAnswer({ question_id: question.id, correct_answer_choice: correctAnswer })
                clearAllFields();
                alert('Created new question and answer')
            } else {
                updateQuestionById(id, finalQuestion);

                if (answerId) {
                    updateAnswerByAnswerId(answerId, { correct_answer_choice: correctAnswer, question_id: id });
                }
                else {
                    await createAnswer({ question_id: id, correct_answer_choice: correctAnswer })
                }

                alert('Saved question and answer')
            }
        }
        catch {
            console.error('Failed to save question/ answer')
        }
    }

    const handleDelete = () => {
        deleteQuestionById(id);
        deleteAnswerByQuestionId(id); // untested
        alert('Deleted Question')

        clearAllFields();
    }

    return (
        <>
            <div className="w-3/5 mx-20 my-10 text-center">
                <form className="flex flex-col space-y-2">
                    <Link href="/admin/questions">
                        <button className="border p-2 rounded bg-violet-500 hover:bg-violet-600 mt-2 w-full">
                            Back To All Questions
                        </button>
                    </Link>
                    <label htmlFor="title" className="">Title</label>
                    <textarea id="title" name="title" value={title} className="p-2 mb-4 rounded" onChange={(e) => setTitle(e.target.value)} />

                    <label htmlFor="body" className="">Question</label>
                    <textarea id="body" name="body" value={body} className="p-2 mb-4 ounded" onChange={(e) => setBody(e.target.value)} />

                    <label htmlFor="a1" className="">Answer 1</label>
                    <textarea id="a1" name="a1" value={a1} className="p-2 mb-4 rounded" onChange={(e) => setA1(e.target.value)} />

                    <label htmlFor="a2" className="">Answer 2</label>
                    <textarea id="a2" name="a2" value={a2} className="p-2 mb-4 rounded" onChange={(e) => setA2(e.target.value)} />

                    <label htmlFor="a3" className="">Answer 3</label>
                    <textarea id="a3" name="a3" value={a3} className="p-2 mb-4 rounded" onChange={(e) => setA3(e.target.value)} />

                    <label htmlFor="a4" className="">Answer 4</label>
                    <textarea id="a4" name="a4" value={a4} className="p-2 mb-4 rounded" onChange={(e) => setA4(e.target.value)} />

                    <label htmlFor="answer" className="">Correct Answer</label>
                    <select id="answer" name="answer" value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)} className="p-2 mb-4 rounded">
                        <option value="a1">Answer 1</option>
                        <option value="a2">Answer 2</option>
                        <option value="a3">Answer 3</option>
                        <option value="a4">Answer 4</option>
                    </select>

                    <button onClick={handleSubmit} className="border p-2 rounded bg-blue-500 hover:bg-blue-600 mt-2">Save Changes</button>
                    <button onClick={handleDelete} className="border p-2 rounded bg-red-500 hover:bg-red-600 mt-2">Delete Question</button>
                </form>
            </div >
        </>
    )
}