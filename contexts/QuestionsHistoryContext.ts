'use client'

import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';
import type { QuestionHistory } from '../components/questionSidebar/QuestionSidebar';

type ContexProps = 
    { questionsHistory: QuestionHistory[]; setQuestionsHistory: Dispatch<SetStateAction<QuestionHistory[]>> | null; };

const QuestionsHistoryContext = createContext<ContexProps>({questionsHistory: [], setQuestionsHistory: null});

export default QuestionsHistoryContext;