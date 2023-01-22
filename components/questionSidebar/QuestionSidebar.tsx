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
        <aside className="mx-auto w-full lg:left-0 lg:m-0 lg:h-full lg:w-96">
            <div className="overflow-y-auto rounded-lg bg-gray-50 dark:bg-gray-800 lg:h-full ">
                <button className="lg:hidden">+/-</button>
                <ul className="space-y-2 p-10">
                    <Link href={route} className="mb-5 flex items-center pl-2.5">
                        <span className="self-center whitespace-nowrap font-semibold dark:text-white">Questions</span>
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