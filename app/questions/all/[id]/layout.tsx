import QuestionSidebar from "../../../../components/questionSidebar/QuestionSidebar";
import { Routes } from "../../../../constants";
import { getQuestions } from "../../../../helpers/supabase-helpers";

export default async function QuestionPageLayout({
    children
}: {
    children: React.ReactNode
}) {
    const allQuestions = await getQuestions();

    if (allQuestions) {
        return (
            <section className="flex">
                <QuestionSidebar allQuestions={allQuestions} route={Routes.QUESTIONS} />
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
