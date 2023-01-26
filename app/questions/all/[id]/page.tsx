"use client";

import { MultipleChoiceQuestionAndAnswer } from "../../../../components/questionAndAnswer/MultipleChoiceQuestionAndAnswer";

interface QuestionPageParams {
  params: {
    id: number
  }
}

export default function AllQuestionPage({ params }: QuestionPageParams) {
  return <MultipleChoiceQuestionAndAnswer question_id={params.id} />
}


