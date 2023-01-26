import QuestionSidebar from "../../../../components/questionSidebar/QuestionSidebar";
import { Routes } from "../../../../enums/Routes";
import { getAllQuestionsInQuestionSet } from "../../../../helpers/supabase-helpers";

export default async function QuestionPageLayout({
    children,
    params
}: {
    children: React.ReactNode
    params: { question_set_id: number }
}) {
    const { data: allQuestions } = await getAllQuestionsInQuestionSet(params.question_set_id);

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
