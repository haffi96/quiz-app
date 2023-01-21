import Link from "next/link";
import { RouteExtensions } from "../../../constants";
import { getQuestions } from "../../../helpers/supabase-helpers"
import "./style.css";

export default async function AdminQuestionsPage() {
    const questions = await getQuestions();

    const questionRows = questions?.map((question) => {

        return (
            <tr className="border" key={question.id}>
                <td >{question.title}</td>
                <td>{question.body}</td>
                <td><Link href={`admin/questions/edit/${question.id}`}>Edit</Link></td>
                <td className="text-red-600">Delete (TODO)</td>
            </tr>
        )
    })

    return (
        <div className="mx-20 my-10 items-center">
            <button className="mb-5 bg-transparent hover:bg-blue-500 text-blue-700  font-semibold hover:text-white dark:hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <Link href={`admin/questions/edit/${RouteExtensions.NEW_QUESTION_ID}`}>Create New Question</Link>
            </button>
            <table className="table-auto m-auto border border-collapse">
                <thead className="border-4">
                    <tr>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {questionRows}
                </tbody>
            </table>
        </div>
    )
}