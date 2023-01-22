import Link from "next/link";
import type { Database } from "../../lib/database.types";
import { Routes } from "../../Routes";
import { QuestionSidebarListItem } from "./QuestionSidebarListItem";

interface QuestionSidebarProps {
    allQuestions: Database["public"]["Tables"]["questions"]["Row"][],
    route: string
}

export default function QuestionSidebar({ allQuestions, route }: QuestionSidebarProps) {
    return (
        <aside className="lg:w-96 lg:block" aria-label="Sidebar">
            <div className="overflow-y-auto rounded-lg bg-gray-50 dark:bg-gray-800 lg:px-3 lg:py-4 lg:h-2/3 lg:m-8">
                <ul className="lg:space-y-2">
                    <Link href={route} className="flex items-center pl-2.5 mb-5">
                        <span className="self-center font-semibold whitespace-nowrap dark:text-white">Questions</span>
                    </Link>
                    {route === Routes.ADMIN_EDIT && <QuestionSidebarListItem newItem text="# Create New Question #" key={Routes.NEW_QUESTION} index={-1} href={Routes.NEW_QUESTION} />}
                    <br />
                    {
                        allQuestions.map((question, index) => (
                            <QuestionSidebarListItem text={question.title ?? 'Missing title'} key={question.id} index={index} href={`${route}/${question.id}`} />
                        ))
                    }
                </ul>
            </div>
        </aside >
    )
}