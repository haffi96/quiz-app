import QuestionSidebar from "../../../components/questionSidebar/QuestionSidebar";
import { Routes } from "../../../enums/Routes";
import { getAllQuestions } from "../../../utils/supabaseHelper";
import QuestionHistoryProvider from "../../../providers/QuestionHistoryProvider";

export const enum AnswerState {
    Correct = 'CORRECT',
    Incorrect = 'INCORRECT',
    Unanswered = 'UNANSWERED'
}

export default async function QuestionPageLayout({
    children
}: {
    children: React.ReactNode
}) {
    const { data, error } = await getAllQuestions();

    if (error || !data) {
        console.error({ error })
        return <div className="container m-auto text-center">Error getting questions</div>
    }

    const questionHistory = getInitialQuestionHistory(data);

    return (
        <section className="flex flex-col-reverse lg:h-screen lg:flex-row">
            <QuestionHistoryProvider questionsHistory={questionHistory}>
                <QuestionSidebar allQuestions={data} route={Routes.QUESTIONS_ALL} />
                {children}
            </QuestionHistoryProvider>

        </section>
    )
}

function getInitialQuestionHistory(questions: {
    a1: string;
    a2: string;
    a3: string;
    a4: string;
    body: string;
    created_at: string;
    id: number;
    question_set: number | null;
    title: string;
    updated_at: string;
}[]) { // replace this with supabase type
    // TODO: get user questions history from local storage
    // TODO: get users question history from db
    const questionHistory = []

    for (const question of questions) {
        const id = question.id;
        const newObject = {
            id,
            answerState: AnswerState.Unanswered
        }
        questionHistory.push(newObject)
    }

    return questionHistory
}