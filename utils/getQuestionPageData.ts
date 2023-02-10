import { getQuestionById, getNextQuestionId, getPreviousQuestionId, getAnswerCountsForQuestion } from "./supabaseHelper";

export async function getQuestionPageData(id: number, questionSetId?: number) {
    const questionData = await getQuestionById(id);
    const nextQuestionId = questionSetId ? await getNextQuestionId(id, questionSetId) : await getNextQuestionId(id);
    const previousQuestionId = questionSetId ? 
      await getPreviousQuestionId(id, questionSetId) : 
      await getPreviousQuestionId(id);
    const questionAnswerCounts = await getAnswerCountsForQuestion(id);

    return { questionSetId, questionData, nextQuestionId, previousQuestionId, questionAnswerCounts }
  }