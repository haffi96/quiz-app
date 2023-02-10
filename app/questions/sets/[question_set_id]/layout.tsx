import QuestionSidebar from "../../../../components/questionSidebar/QuestionSidebar";
import { Routes } from "../../../../enums/Routes";
import { getAllQuestionsInQuestionSet } from "../../../../utils/supabaseHelper";

export default async function QuestionPageLayout({
    children,
    params
}: {
    children: React.ReactNode
    params: { question_set_id: number }
}) {
    const { question_set_id } = params;
    const { data, error } = await getAllQuestionsInQuestionSet(question_set_id);

    if (error || !data) {
        console.error({ error })
        return <>Failed to fetch questions...</>
    }

    return (
        <section className="flex flex-col-reverse lg:h-screen lg:flex-row">
            <QuestionSidebar allQuestions={data} route={`${Routes.QUESTION_SETS}/${question_set_id}`} />
            {children}
        </section>
    )

}
