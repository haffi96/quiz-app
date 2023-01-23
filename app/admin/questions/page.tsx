import Link from "next/link";
import { Routes } from "../../../Routes";
import { getQuestions } from "../../../helpers/supabase-helpers"
import "./style.css";

export default async function AdminQuestionsPage() {
    const questions = await getQuestions();
    const questionRows = questions?.map((question) => {
        const { id, title, body } = question

        return (
            <tr className="border" key={id}>
                <td >{title}</td>
                <td>{body}</td>
                <td><Link href={`admin/questions/edit/${id}`}>Edit</Link></td>
            </tr>
        )
    })

    return (
        <div className="container mx-auto flex max-h-screen flex-col items-center text-center">
            <button className="my-12 w-96 rounded border border-blue-500 bg-slate-300 py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white dark:hover:text-white">
                <Link href={Routes.NEW_QUESTION}>Create New Question</Link>
            </button>
            <table className="table-auto border-collapse border">
                <thead className="border-2">
                    <tr>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {questionRows}
                </tbody>
            </table>
        </div>
    )
}