import { MultipleChoiceQuestionAndAnswer } from "../../../../components/questionAndAnswer/MultipleChoiceQuestionAndAnswer";
import { getQuestionPageData } from "../../../../utils/getQuestionPageData";

interface QuestionPageParams {
  params: {
    id: number
  }
}

export default async function AllQuestionPage({ params }: QuestionPageParams) {
  const { id } = params
  const { questionData, nextQuestionId, previousQuestionId, questionAnswerCounts } = await getQuestionPageData(id);

  return <MultipleChoiceQuestionAndAnswer
    questionId={id}
    questionData={questionData}
    nextQuestionId={nextQuestionId}
    previousQuestionId={previousQuestionId}
    questionAnswerCounts={questionAnswerCounts} />
}
