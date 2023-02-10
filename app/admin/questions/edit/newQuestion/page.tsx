"use client"

import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { createAnswer, createQuestion } from "../../../../../utils/supabaseHelper";
import { QuestionForm } from "../../../../../components/forms/QuestionForm";
import { useQuestionFormInputs } from "../../../../../hooks/useQuestionFormInputs";

export default function Page() {
    const router = useRouter();

    const {
        title, setTitle, body, setBody, a1, setA1, a2, setA2, a3, setA3, a4, setA4,
        correctAnswer, setCorrectAnswer, question_set, set_question_set
    } = useQuestionFormInputs();

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
            alert('Created new question and answer');
            router.refresh(); // maybe needed to update the sidebar immediately 
            clearAllFields();
        }
        catch {
            console.error('Failed to save question/ answer')
        }
    }

    const questionFormProps = {
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
        question_set,
        set_question_set,
        handleSubmit
    }

    return (
        <QuestionForm {...questionFormProps} />
    )
}