import { MultipleChoiceQuestionAndAnswer } from "../../../../../components/questionAndAnswer/MultipleChoiceQuestionAndAnswer";
import { getQuestionPageData } from "../../../../../utils/getQuestionPageData";

interface PageParams {
    params: {
        question_set_id: number,
        question_id: number
    }
}

export default async function Page({ params }: PageParams) {
    const { question_set_id, question_id } = params;
    const { questionData, nextQuestionId, previousQuestionId } = await getQuestionPageData(question_id, question_set_id);

    return <MultipleChoiceQuestionAndAnswer
        questionId={question_id}
        questionSetId={question_set_id}
        questionData={questionData}
        nextQuestionId={nextQuestionId}
        previousQuestionId={previousQuestionId} />
}