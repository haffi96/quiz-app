"use client"

import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { useState } from "react"
import { createAnswer, createQuestion } from "../../../../../helpers/supabase-helpers";
import { QuestionForm } from "../../../../../components/forms/QuestionForm";
import type { Database } from "../../../../../lib/database.types";

export default function Page() {
    const router = useRouter();
    const [title, setTitle] = useState<string>('')
    const [body, setBody] = useState<string>('')
    const [a1, setA1] = useState<string>('')
    const [a2, setA2] = useState<string>('')
    const [a3, setA3] = useState<string>('')
    const [a4, setA4] = useState<string>('')
    const [correctAnswer, setCorrectAnswer] = useState<Database["public"]["Enums"]["answer_choices"]>('a1')

    const clearAllFields = () => {
        setTitle('');
        setBody('');
        setA1('');
        setA2('');
        setA3('');
        setA4('');
        setCorrectAnswer('a1')
    }

    const handleSubmit = async (event: FormEvent) => {
        const finalQuestion = { title, body, a1, a2, a3, a4 }
        event.preventDefault();

        try {
            const question = await createQuestion(finalQuestion);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            await createAnswer({ question_id: question!.id, correct_answer_choice: correctAnswer });
            alert('Created new question and answer'); // replace with an animation
            router.refresh(); // needed to update the sidebar immediately 
            clearAllFields();
        }
        catch {
            console.error('Failed to save question/ answer')
        }
    }

    return (
        <QuestionForm title={title} setTitle={setTitle} body={body} setBody={setBody} a1={a1} setA1={setA1} a2={a2} setA2={setA2} a3={a3}
            setA3={setA3} a4={a4} setA4={setA4} correctAnswer={correctAnswer} setCorrectAnswer={setCorrectAnswer}
            handleSubmit={handleSubmit} />
    )
}