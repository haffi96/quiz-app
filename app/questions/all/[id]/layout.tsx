import QuestionSidebar from "../../../../components/questionSidebar/QuestionSidebar";
import { Routes } from "../../../../enums/Routes";
import { getAllQuestions } from "../../../../helpers/supabase-helpers";

export default async function QuestionPageLayout({
    children
}: {
    children: React.ReactNode
}) {
    const { data, error } = await getAllQuestions();

    if (error || !data) {
        console.error({ error })
        return <>error while getting questions</>
    }

    return (
        <section className="flex flex-col-reverse lg:h-screen lg:flex-row">
            <QuestionSidebar allQuestions={data} route={Routes.QUESTIONS_ALL} />
            {children}
        </section>
    )

}
