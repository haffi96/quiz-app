import Link from "next/link";
import { NEW_QUESTION_ID } from "../../constants";
import { getQuestions } from "../../helpers/databaseHelper"
import "./style.css";

export default async function AdminPage() {
    const questions = await getQuestions(); // doesn't update without refreshing page :/

    const questionRows = questions.map((question) => (
        <tr key={question.id}>
            <td>{question.title}</td>
            <td>{question.body}</td>
            <td>{question.a1}</td>
            <td>{question.a2}</td>
            <td>{question.a3}</td>
            <td><Link href={`admin/edit/${question.id}`}>Edit</Link></td>
            <td className="text-red-600">Delete (TODO)</td>
        </tr>
    ))

    return (
        <div className="text-center">
            <table className="table-auto m-auto">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Option 1</th>
                        <th>Option 2</th>
                        <th>Option 3</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {questionRows}
                </tbody>
            </table>
            <br />
            <Link href={`admin/edit/${NEW_QUESTION_ID}`}>Create New Question</Link>
        </div>
    )
}