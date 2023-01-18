import Link from "next/link";
import { NEW_QUESTION_ID } from "../../constants";
import type { QuestionsResponse } from "../../pocketbase-types";
import { QuestionSidebarListItem } from "./QuestionSidebarListItem";

export default function QuestionSidebar({ allQuestions }: { allQuestions: QuestionsResponse[] }) {
    return (
        <aside className="w-64 fixed" aria-label="Sidebar">
            <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2">
                    <Link href="/admin" className="flex items-center pl-2.5 mb-5">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Questions</span>
                    </Link>
                    <QuestionSidebarListItem text="# Create New Question #" id={NEW_QUESTION_ID} key={NEW_QUESTION_ID} index={-1} />
                    {
                        allQuestions.map((question, index) => (
                            <QuestionSidebarListItem text={question.title ?? 'Missing title'} id={question.id} key={question.id} index={index} />
                        ))
                    }
                </ul>
            </div>
        </aside>
    )
}