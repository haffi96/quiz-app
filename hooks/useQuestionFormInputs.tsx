"use client";

import { useState } from "react";
import type { Database } from "../lib/database.types";

export function useQuestionFormInputs() {
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const [a1, setA1] = useState<string>('');
    const [a2, setA2] = useState<string>('');
    const [a3, setA3] = useState<string>('');
    const [a4, setA4] = useState<string>('');
    const [correctAnswer, setCorrectAnswer] = useState<Database["public"]["Enums"]["answer_choices"]>('a1');
    const [question_set, set_question_set] = useState<Database["public"]["Tables"]["questions"]["Row"]["question_set"]>();

    return {
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
        set_question_set
    };
}
