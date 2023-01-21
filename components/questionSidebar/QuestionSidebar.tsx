import Link from "next/link";
import type { QuestionsRecord } from "../../supabase-types";
import { QuestionSidebarListItem } from "./QuestionSidebarListItem";

interface QuestionSidebarProps {
    allQuestions: QuestionsRecord[],
    route: string
}

export default function QuestionSidebar({ allQuestions, route }: QuestionSidebarProps) {
    return (
        <aside className="w-64 pr-5" aria-label="Sidebar">
            <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2">
                    <Link href={route} className="flex items-center pl-2.5 mb-5">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Questions</span>
                    </Link>
                    {/* TODO show this: {route === Routes.ADMIN_EDIT && <QuestionSidebarListItem newItem text="# Create New Question #" id={NEW_QUESTION_ID} key={NEW_QUESTION_ID} index={-1} route={route} />} */}
                    {
                        allQuestions.map((question, index) => (
                            <QuestionSidebarListItem text={question.title ?? 'Missing title'} id={question.id} key={question.id} index={index} route={route} />
                        ))
                    }
                </ul>
            </div>
        </aside >
    )
}