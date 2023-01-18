import QuestionSidebar from "../../../components/questionSidebar/QuestionSidebar";
import { Routes } from "../../../constants";
import { getQuestions } from "../../../helpers/pocketbaseHelper";

export default async function SidebarLayout({
    children
}: {
    children: React.ReactNode
}) {
    const allQuestions = await getQuestions();
    return (
        <section>
            <QuestionSidebar allQuestions={allQuestions} route={Routes.QUESTIONS} />
            {children}
        </section>
    )
}
