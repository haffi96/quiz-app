'use client';

import Link from "next/link";
import type { Database } from "../../lib/database.types";
import { Routes } from "../../enums/Routes";
import { QuestionSidebarListItem } from "./QuestionSidebarListItem";
import { useState } from "react";
import { useContext } from 'react';
import QuestionsHistoryContext from "../../contexts/QuestionsHistoryContext";
import type { AnswerState } from "../../app/questions/all/layout";

type DbQuestion = Database["public"]["Tables"]["questions"]["Row"];

interface Question extends DbQuestion {
    answerState?: AnswerState;
}

interface QuestionSidebarProps {
    allQuestions: Question[],
    route: string
}

export interface QuestionHistory {
    id: number,
    answerState: AnswerState
}

export function getQuestionAnswerStateFromId(id: number, questionsHistory: QuestionHistory[]) {
    const singleHistory = questionsHistory.find((h) => h.id === id);

    return singleHistory?.answerState
}

export default function QuestionSidebar({ allQuestions, route }: QuestionSidebarProps) {
    const [search, setSearch] = useState('')
    const { questionsHistory } = useContext(QuestionsHistoryContext);
    const searchFilter = (question: Question) => search === '' || question.title.toLowerCase().includes(search.toLowerCase());

    return (
        <aside className="mx-auto w-full lg:left-0 lg:m-0 lg:h-full lg:w-1/3">
            <div className="overflow-y-auto rounded-lg bg-gray-50 dark:bg-gray-800 lg:h-full">
                <div className="pt-10 text-center">
                    <input
                        className="h-10 w-4/5 rounded-lg bg-white px-2 text-black"
                        type="text"
                        placeholder="Search questions"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <button className="lg:hidden">+/-</button>
                <ul className="space-y-2 p-10">
                    <Link href={route} className="mb-5 flex items-center pl-2.5">
                        <span className="self-center whitespace-nowrap font-semibold dark:text-white">Questions</span>
                    </Link>
                    {route === Routes.ADMIN_EDIT && <QuestionSidebarListItem newItem text="# Create New Question #" key={Routes.NEW_QUESTION} index={-1} href={Routes.NEW_QUESTION} />}
                    <br />
                    {
                        allQuestions
                            .filter(searchFilter)
                            .map((question, index) => {
                                const answerState = getQuestionAnswerStateFromId(question.id, questionsHistory)
                                return <QuestionSidebarListItem text={question.title ?? 'Missing title'} key={question.id} index={index} href={`${route}/${question.id}`} answerState={answerState} />
                            })
                    }
                </ul>
            </div>
        </aside >
    )
}
