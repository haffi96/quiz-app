interface Params {
    params: {
        question_set_id: number // name would probably be better
    }
}

export default function Page({ params }: Params) {
    const { question_set_id } = params;

    return <>
        <p>TODO: Show relevant questions </p>
        <p>question_set_id: {question_set_id}</p>
    </>
}