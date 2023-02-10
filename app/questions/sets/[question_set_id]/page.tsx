import Link from "next/link";
import { getFirstQuestionInQuestionSetWithQuestionSetId, getQuestionSetNameById } from "../../../../utils/supabaseHelper";
import { Routes } from "../../../../enums/Routes";

interface Params {
    params: {
        question_set_id: number
    }
}

export default async function Page({ params }: Params) {
    const { question_set_id } = params;
    const questionSetName = await getQuestionSetNameById(question_set_id);
    const firstQuestionId = await getFirstQuestionInQuestionSetWithQuestionSetId(question_set_id);

    return (
        <div className="container m-auto text-center">
            <div className="text-5xl">{questionSetName}</div>
            <br />
            <div>Question Set Description Will Go Here</div>
            <br />
            <Link href={`${Routes.QUESTION_SETS}/${question_set_id}/${firstQuestionId}`}>Go To First Question</Link>
        </div>
    )
}