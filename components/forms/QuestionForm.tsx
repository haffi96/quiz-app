"use client";

import Link from "next/link";
import type { Dispatch, FormEvent, SetStateAction } from "react";
import type { Database } from "../../lib/database.types";

export interface QuestionFormProps {
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
    question_set?: Database["public"]["Tables"]["questions"]["Row"]["question_set"]
    set_question_set: Dispatch<SetStateAction<Database["public"]["Tables"]["questions"]["Row"]["question_set"] | undefined>>
    handleSubmit: (event: FormEvent) => Promise<void>,
    handleDelete?: () => void
}

export function QuestionForm({
    title,
    setTitle,
    body,
    setBody,
    a1,
    setA1,
    a2,
    setA2,
    a3,
    setA3,
    a4,
    setA4,
    correctAnswer,
    setCorrectAnswer,
    handleSubmit,
    handleDelete,
    question_set,
    set_question_set
}: QuestionFormProps) {
    return (
        <>
            <div className="mx-20 my-10 w-3/5 text-center">
                <form className="flex flex-col space-y-2">
                    <Link href="/admin/questions">
                        <button className="mt-2 w-full rounded border bg-violet-500 p-2 hover:bg-violet-600">
                            Back To All Questions
                        </button>
                    </Link>
                    <label htmlFor="title" className="">Title</label>
                    <textarea id="title" name="title" value={title} className="mb-4 rounded p-2" onChange={(e) => setTitle(e.target.value)} />

                    <label htmlFor="body" className="">Question</label>
                    <textarea id="body" name="body" value={body} className="mb-4 rounded p-2" onChange={(e) => setBody(e.target.value)} />

                    <label htmlFor="a1" className="">Answer 1</label>
                    <textarea id="a1" name="a1" value={a1} className="mb-4 rounded p-2" onChange={(e) => setA1(e.target.value)} />

                    <label htmlFor="a2" className="">Answer 2</label>
                    <textarea id="a2" name="a2" value={a2} className="mb-4 rounded p-2" onChange={(e) => setA2(e.target.value)} />

                    <label htmlFor="a3" className="">Answer 3</label>
                    <textarea id="a3" name="a3" value={a3} className="mb-4 rounded p-2" onChange={(e) => setA3(e.target.value)} />

                    <label htmlFor="a4" className="">Answer 4</label>
                    <textarea id="a4" name="a4" value={a4} className="mb-4 rounded p-2" onChange={(e) => setA4(e.target.value)} />

                    <label htmlFor="question_set">Question Set</label>
                    <textarea id="question_set" name="question_set" value={Number(question_set)} className="mb-4 rounded p-2" onChange={(e) => set_question_set(Number(e.target.value))} />

                    <label htmlFor="answer" className="">Correct Answer</label>
                    <select id="answer" name="answer" value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value as Database["public"]["Enums"]["answer_choices"])} className="mb-4 rounded p-2">
                        <option value="a1">Answer 1</option>
                        <option value="a2">Answer 2</option>
                        <option value="a3">Answer 3</option>
                        <option value="a4">Answer 4</option>
                    </select>

                    <button onClick={handleSubmit} className="mt-2 rounded border bg-blue-500 p-2 hover:bg-blue-600">Save Changes</button>
                    {handleDelete && <button onClick={handleDelete} className="mt-2 rounded border bg-red-500 p-2 hover:bg-red-600">Delete Question</button>}
                </form>
            </div>
        </>
    );
}
