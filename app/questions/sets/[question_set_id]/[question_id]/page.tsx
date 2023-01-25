interface PageParams {
    params: {
        question_set_id: number,
        question_id: number
    }
}

export default function Page({ params }: PageParams) {
    const { question_set_id, question_id } = params;

    return <p>question_set_id {question_set_id} question_id {question_id}</p>
}