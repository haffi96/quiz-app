import QuestionSidebar from "../../../components/questionSidebar/QuestionSidebar";
import { Routes } from "../../../enums/Routes";
import { getAllQuestions } from "../../../utils/supabaseHelper"

export default async function AdminPageLayout({
    children
}: {
    children: React.ReactNode
}) {
    const { data, error } = await getAllQuestions();

    if (error || !data) {
        console.error({ error })
        return <>missing data</>
    }

    return (
        <section className="flex flex-col-reverse lg:h-screen lg:flex-row">
            <QuestionSidebar allQuestions={data} route={Routes.ADMIN_EDIT} />
            {children}
        </section>
    )
}

