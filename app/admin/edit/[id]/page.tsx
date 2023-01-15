"use client"

import { editQuestion, getQuestion, createQuestion, deleteQuestion } from "../../../../helpers/pocketbaseHelper"
import type { FormEvent } from "react";
import { useEffect, useState } from "react"
import { NEW_QUESTION_ID } from "../../../../constants";
import Link from "next/link";

interface EditIdParams {
    params: { id: string }
}
export default function Page({ params }: EditIdParams) {
    const [title, setTitle] = useState<string | undefined>('')
    const [body, setBody] = useState<string | undefined>('')
    const [a1, setA1] = useState<string | undefined>('')
    const [a2, setA2] = useState<string | undefined>('')
    const [a3, setA3] = useState<string | undefined>('')

    const { id } = params
    const isNewQuestion = id === NEW_QUESTION_ID

    useEffect(() => {
        if (!isNewQuestion) {
            const getQuestionAndSetFields = async () => {
                const question = await getQuestion(id)
                setTitle(question.title);
                setBody(question.body);
                setA1(question.a1);
                setA2(question.a2);
                setA3(question.a3);
            };

            getQuestionAndSetFields();
        }
    }, [id, isNewQuestion]);

    const clearAllFields = () => {
        setTitle('');
        setBody('');
        setA1('');
        setA2('');
        setA3('');
    }

    const handleSubmit = (event: FormEvent) => {
        const finalQuestion = { title, body, a1, a2, a3 }
        event.preventDefault();

        if (isNewQuestion) {
            createQuestion(finalQuestion)
            clearAllFields();
            alert('Created new question')
        } else {
            editQuestion(id, finalQuestion);
            alert('Saved question')
        }
    }

    const handleDelete = () => {
        deleteQuestion(id);
        alert('Deleted Question')
        clearAllFields
    }

    return (
        <div className="w-3/5 m-auto text-center">
            <Link href="/admin">
                <div className="text-xl text-violet-600 bg-orange-400 p-2 rounded font-bold">
                    Back To All Questions
                </div>
            </Link>
            <form className="flex flex-col mt-4">
                <label htmlFor="title" className="">Title</label>
                <input type="text" id="title" name="title" value={title} className="p-2 mb-4 rounded" onChange={(e) => setTitle(e.target.value)} />

                <label htmlFor="body" className="">Question</label>
                <input type="text" id="body" name="body" value={body} className="p-2 mb-4 ounded" onChange={(e) => setBody(e.target.value)} />

                <label htmlFor="a1" className="">Answer 1</label>
                <input type="text" id="a1" name="a1" value={a1} className="p-2 mb-4 rounded" onChange={(e) => setA1(e.target.value)} />

                <label htmlFor="a2" className="">Answer 2</label>
                <input type="text" id="a2" name="a2" value={a2} className="p-2 mb-4 rounded" onChange={(e) => setA2(e.target.value)} />

                <label htmlFor="a3" className="">Answer 3</label>
                <input type="text" id="a3" name="a3" value={a3} className="p-2 mb-4 rounded" onChange={(e) => setA3(e.target.value)} />

                <button onClick={handleSubmit} className="border p-2 rounded bg-blue-500 hover:bg-blue-600 mt-2">Save Changes</button>
                <button onClick={handleDelete} className="border p-2 rounded bg-red-500 hover:bg-red-600 mt-2">Delete Question</button>
            </form>
        </div >
    )
}