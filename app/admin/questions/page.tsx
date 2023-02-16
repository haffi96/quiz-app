import Link from "next/link";
import { IoCreate } from "react-icons/io5";
import { AiFillEdit } from "react-icons/ai";
import { Routes } from "../../../enums/Routes";
import { getAllQuestions } from "../../../utils/supabaseHelper"
import "./style.css";

export default async function AdminQuestionsPage() {
    const { data: questions } = await getAllQuestions();
    const questionRows = questions?.map((question) => {
        const { id, title, body } = question

        return (
            <tr className="" key={id}>
                <td className="border border-slate-500/40" >{id}</td>
                <td className="border border-slate-500/40" >{title}</td>
                <td className="border border-slate-500/40">{body}</td>
                <td className="border border-slate-500/40"><Link href={`admin/questions/edit/${id}`}>
                    <AiFillEdit className="text-slate-400 hover:text-blue-500 dark:hover:text-blue-100" aria-hidden="true" />
                </Link></td>
            </tr>
        )
    })

    return (
        <div className="container mx-auto flex flex-col items-center p-3 text-center">
            <button className="my-8 flex w-1/3 flex-row space-x-5 rounded border border-blue-500 bg-slate-200 px-10 py-2 font-semibold text-black hover:border-transparent hover:bg-blue-500 hover:text-white dark:hover:text-white">
                <IoCreate
                    className="h-5 w-5 text-slate-400 hover:text-blue-100"
                    aria-hidden="true"
                />
                <Link href={Routes.NEW_QUESTION}>Create New Question</Link>
            </button>
            <div className="h-3/4 overflow-scroll rounded-2xl border border-slate-600 p-2 dark:bg-slate-800">
                <table className="table-auto border-collapse border">
                    <thead className="">
                        <tr>
                            <th className="border border-slate-500">ID</th>
                            <th className="border border-slate-500">Title</th>
                            <th className="border border-slate-500">Body</th>
                            <th className="border border-slate-500">Edit</th>
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