import { getQuestionById, getNextQuestionId, getPreviousQuestionId } from "../helpers/supabase-helpers";

export async function getQuestionPageData(id: number, questionSetId?: number) {
    const questionData = await getQuestionById(id);
    const nextQuestionId = questionSetId ? await getNextQuestionId(id, questionSetId) : await getNextQuestionId(id);
    const previousQuestionId = questionSetId ? await getPreviousQuestionId(id, questionSetId) : await getPreviousQuestionId(id);
  
    return { questionSetId, questionData, nextQuestionId, previousQuestionId }
  }