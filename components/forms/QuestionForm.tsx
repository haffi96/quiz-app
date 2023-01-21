"use client";
import Link from "next/link";
import type { Dispatch, FormEvent, SetStateAction } from "react";
import type { Database } from "../../lib/database.types";

export interface NewQuestionFormProps {
    title: string,
    setTitle: Dispatch<SetStateAction<string>>,
    body: string,
    setBody: Dispatch<SetStateAction<string>>,
    a1: string,
    setA1: Dispatch<SetStateAction<string>>,
    a2: string,
    setA2: Dispatch<SetStateAction<string>>,
    a3: string,
    setA3: Dispatch<SetStateAction<string>>,
    a4: string,
    setA4: Dispatch<SetStateAction<string>>,
    correctAnswer: string,
    setCorrectAnswer: Dispatch<SetStateAction<Database["public"]["Enums"]["answer_choices"]>>,
    handleSubmit: (event: FormEvent) => Promise<void>,
    handleDelete?: () => void
}

export function QuestionForm({
    title, setTitle, body, setBody, a1, setA1, a2, setA2, a3, setA3, a4, setA4, correctAnswer, setCorrectAnswer, handleSubmit, handleDelete }: NewQuestionFormProps) {
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
                    <select id="answer" name="answer" value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value as Database["public"]["Enums"]["answer_choices"])} className="p-2 mb-4 rounded">
                        <option value="a1">Answer 1</option>
                        <option value="a2">Answer 2</option>
                        <option value="a3">Answer 3</option>
                        <option value="a4">Answer 4</option>
                    </select>

                    <button onClick={handleSubmit} className="border p-2 rounded bg-blue-500 hover:bg-blue-600 mt-2">Save Changes</button>
                    {handleDelete && <button onClick={handleDelete} className="border p-2 rounded bg-red-500 hover:bg-red-600 mt-2">Delete Question</button>}
                </form>
            </div>
        </>
    );
}
