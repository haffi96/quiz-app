'use client';

import { useEffect, useState } from 'react';
import type { QuestionHistory } from '../components/questionSidebar/QuestionSidebar';
import QuestionHistoriesContext from '../contexts/QuestionHistoriesContext';
import { AnswerState } from '../enums/AnswerState';
import { LocalStorageKeys } from '../enums/LocalStorageKeys';

interface QuestionHistoryProviderProps {
    children: React.ReactNode,
    questionHistories: QuestionHistory[],
    questions: {
        a1: string;
        a2: string;
        a3: string;
        a4: string;
        body: string;
        created_at: string;
        id: number;
        question_set: number | null;
        title: string;
        updated_at: string;
    }[]
}

export default function QuestionHistoryProvider(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    { children, questionHistories: dbQuestionHistories, questions }: QuestionHistoryProviderProps) {

    const [questionHistories, setQuestionHistories] = useState<QuestionHistory[]>([]);

    useEffect(() => {
        const localStorageQuestionHistories = localStorage.getItem(LocalStorageKeys.QuestionHistories);
        const questionHistoriesToSet = localStorageQuestionHistories ?
            JSON.parse(localStorageQuestionHistories) as QuestionHistory[] :
            createUnansweredQuestionHistoriesForEachQuestion(questions)

        setQuestionHistories(questionHistoriesToSet)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (questionHistories.length !== 0) {
            localStorage.setItem(LocalStorageKeys.QuestionHistories, JSON.stringify(questionHistories))
        }
    }, [questionHistories])

    return (
        <QuestionHistoriesContext.Provider
            value={{ questionHistories, setQuestionHistories, questions }}>
            {children}
        </QuestionHistoriesContext.Provider>
    );
}

function createUnansweredQuestionHistoriesForEachQuestion(questions: {
    a1: string;
    a2: string;
    a3: string;
    a4: string;
    body: string;
    created_at: string;
    id: number;
    question_set: number | null;
    title: string;
    updated_at: string;
}[]): QuestionHistory[] {
    const questionHistory = []

    for (const question of questions) {
        const id = question.id;
        const newObject = {
            id,
            answerState: AnswerState.Unanswered
        }
        questionHistory.push(newObject)
    }

    return questionHistory
}