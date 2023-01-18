import QuestionSidebar from "../../components/questionSidebar/QuestionSidebar";
import { Routes } from "../../constants";
import { getQuestions } from "../../helpers/pocketbaseHelper"
import { AuthProvider } from "../auth";

export default async function AdminPageLayout({
    children
}: {
    children: React.ReactNode
}) {
    const allQuestions = await getQuestions();
    return (
        <>
            <AuthProvider>
                <section className="flex">
                    <QuestionSidebar allQuestions={allQuestions} route={Routes.ADMIN_EDIT} />
                    {children}
                </section>
            </AuthProvider>
        </>
    )
}
