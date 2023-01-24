import QuestionSidebar from "../../../../components/questionSidebar/QuestionSidebar";
import { Routes } from "../../../../Routes";
import { getAllQuestions } from "../../../../helpers/supabase-helpers";

export default async function QuestionPageLayout({
    children
}: {
    children: React.ReactNode
}) {
    const allQuestions = await getAllQuestions();

    if (allQuestions) {
        return (
            <section className="flex flex-col-reverse lg:h-screen lg:flex-row">
                <QuestionSidebar allQuestions={allQuestions} route={Routes.QUESTIONS_ALL} />
                {children}
            </section>
        )
    } else {
        return (
            <>
                Failed to fetch questions...
            </>
        )
    }
}
