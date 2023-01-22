import Link from "next/link";
import { Routes } from "../../../Routes";
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
        <div className="container mx-auto flex flex-col max-h-screen text-center items-center">
            <button className="bg-slate-300 w-96 my-12 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white dark:hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <Link href={Routes.NEW_QUESTION}>Create New Question</Link>
            </button>
            <table className="table-auto border border-collapse">
                <thead className="border-2">
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