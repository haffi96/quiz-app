"use client";

import { MultipleChoiceQuestionAndAnswer } from "../../../../../components/questionAndAnswer/MultipleChoiceQuestionAndAnswer";

interface PageParams {
    params: {
        question_set_id: number,
        question_id: number
    }
}

export default function Page({ params }: PageParams) {
    const { question_set_id, question_id } = params;

    return <MultipleChoiceQuestionAndAnswer question_id={question_id} questionSetId={question_set_id} />
}