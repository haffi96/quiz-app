import { getQuestions } from "../../getQuestions"
import "./style.css";

export default async function Page() {
    const questions = await getQuestions();

    const questionRows = questions.map((question) => (
        <tr key={question.id}>
            <td>{question.title}</td>
            <td>{question.body}</td>
            <td>{question.choices.a1}</td>
            <td>{question.choices.a2}</td>
            <td>{question.choices.a3}</td>
            <td><a href={`admin/edit/${question.id}`}>Edit</a></td>
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