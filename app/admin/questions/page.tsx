import Link from "next/link";
import { Routes } from "../../../Routes";
import { getAllQuestions } from "../../../helpers/supabase-helpers"
import "./style.css";

export default async function AdminQuestionsPage() {
    const questions = await getAllQuestions();
    const questionRows = questions?.map((question) => {
        const { id, title, body } = question

        return (
            <tr className="border" key={id}>
                <td className="border" >{title}</td>
                <td className="border">{body}</td>
                <td className="border"><Link href={`admin/questions/edit/${id}`}>Edit</Link></td>
            </tr>
        )
    })

    return (
        <div className="container mx-auto flex flex-col items-center text-center">
            <button className="my-12 w-96 rounded border border-blue-500 bg-slate-300 py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white dark:hover:text-white">
                <Link href={Routes.NEW_QUESTION}>Create New Question</Link>
            </button>
            <div className="h-3/4 overflow-scroll border dark:bg-slate-800">
                <table className=" table-auto border-collapse border">
                    <thead className="border-2">
                        <tr>
                            <th className="border">Title</th>
                            <th className="border">Body</th>
                            <th className="border">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questionRows}
                    </tbody>
                </table>
            </div>
        </div>
    )
}