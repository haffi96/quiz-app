import QuestionSidebar from "../../../components/questionSidebar/QuestionSidebar";
import { Routes } from "../../../enums/Routes";
import { getAllQuestions } from "../../../utils/supabaseHelper";
import QuestionHistoryProvider from "../../../providers/QuestionHistoryProvider";

export default async function QuestionPageLayout({
    children
}: {
    children: React.ReactNode
}) {
    const { data, error } = await getAllQuestions();

    // TODO: get users question history from db

    if (error || !data) {
        console.error({ error })
        return <div className="container m-auto text-center">Error getting questions</div>
    }


    return (
        <section className="flex flex-col-reverse lg:h-screen lg:flex-row">
            <QuestionHistoryProvider questionHistories={[]} questions={data}>
                <QuestionSidebar allQuestions={data} route={Routes.QUESTIONS_ALL} />
                {children}
            </QuestionHistoryProvider>
        </section >
    )
}