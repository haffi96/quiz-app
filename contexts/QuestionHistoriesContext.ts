'use client'

import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';
import type { QuestionHistory } from '../components/questionSidebar/QuestionSidebar';
import type { Database } from '../lib/database.types';

type QuestionHistoriesContexProps = 
    {   
        questionHistories: QuestionHistory[]; 
        setQuestionHistories: Dispatch<SetStateAction<QuestionHistory[]>> | null; 
        questions: Database['public']['Tables']['questions']['Row'][]};

const QuestionHistoriesContext = createContext<QuestionHistoriesContexProps>({
    questionHistories: [], 
    setQuestionHistories: null, 
    questions: []});

export default QuestionHistoriesContext;