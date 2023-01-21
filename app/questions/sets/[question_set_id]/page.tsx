interface Params {
    params: {
        question_set_id: number // name would probably be better
    }
}

export default function Page({ params }: Params) {
    const { question_set_id } = params;

    return <>{question_set_id}</>
}