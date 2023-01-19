import Link from "next/link";
import { NEW_QUESTION_ID } from "../../constants";
import { getAnswers, getQuestions } from "../../helpers/pocketbaseHelper"
import "./style.css";

export default async function AdminPage() {
    const questions = await getQuestions();
    const answers = await getAnswers()

    const questionRows = questions.map((question) => {
        const correctAnswerChoice = answers.find((answer) => answer.question_id === question.id)?.correctAnswerChoice

        return (
            <tr className="border" key={question.id}>
                <td >{question.title}</td>
                <td>{question.body}</td>
                {/* <td>{question.a1}</td>
                <td>{question.a2}</td>
                <td>{question.a3}</td>
                <td>{question.a4}</td> */}
                {/* <td>{correctAnswerChoice}</td> */}
                <td><Link href={`admin/edit/${question.id}`}>Edit</Link></td>
                <td className="text-red-600">Delete (TODO)</td>
            </tr>
        )
    })

    return (
        <div className="mx-20 my-10 items-center">
            <button className="mb-5 bg-transparent hover:bg-blue-500 text-blue-700  font-semibold hover:text-white dark:hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <Link href={`admin/edit/${NEW_QUESTION_ID}`}>Create New Question</Link>
            </button>
            <table className="table-auto m-auto border border-collapse">
                <thead className="border-4">
                    <tr>
                        <th>Title</th>
                        <th>Body</th>
                        {/* <th>Option 1</th>
                        <th>Option 2</th>
                        <th>Option 3</th>
                        <th>Option 4</th> */}
                        {/* <th>Correct Answer Choice</th> */}
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