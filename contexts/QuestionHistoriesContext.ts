'use client'

import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';
import type { QuestionHistory } from '../components/questionSidebar/QuestionSidebar';

type ContexProps = 
    {   
        questionHistories: QuestionHistory[]; 
        setQuestionHistories: Dispatch<SetStateAction<QuestionHistory[]>> | null; 
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
    }[]};

const QuestionHistoriesContext = createContext<ContexProps>({
    questionHistories: [], 
    setQuestionHistories: null, 
    questions: []});

export default QuestionHistoriesContext;