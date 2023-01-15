import Link from "next/link";
import { getQuestions } from "../../helpers/databaseHelper"
import "./style.css";

// TODO: add new questions

export default async function AdminPage() {
    const questions = await getQuestions();

    const questionRows = questions.map((question) => (
        <tr key={question.id}>
            <td>{question.title}</td>
            <td>{question.body}</td>
            <td>{question.a1}</td>
            <td>{question.a2}</td>
            <td>{question.a3}</td>
            <td><Link href={`admin/edit/${question.id}`}>Edit</Link></td>
        </tr>
    ))

    return (
        <>
            <table className="table-auto m-auto">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Option 1</th>
                        <th>Option 2</th>
                        <th>Option 3</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {questionRows}
                </tbody>
            </table>
        </>
    )
}