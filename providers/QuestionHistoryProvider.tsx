'use client';

import { useState } from 'react';
import type { QuestionHistory } from '../components/questionSidebar/QuestionSidebar';
import QuestionsHistoryContext from '../contexts/QuestionsHistoryContext';

interface QuestionHistoryProviderProps {
    children: React.ReactNode,
    questionsHistory: QuestionHistory[]
}

export default function QuestionHistoryProvider(
    { children, questionsHistory: data }: QuestionHistoryProviderProps) {

    const [questionsHistory, setQuestionsHistory] = useState(data);

    return (
        <QuestionsHistoryContext.Provider value={{ questionsHistory, setQuestionsHistory }}>
            {children}
        </QuestionsHistoryContext.Provider>
    );
}

