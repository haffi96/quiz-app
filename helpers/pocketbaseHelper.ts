import PocketBase from 'pocketbase';
import type { QuestionsRecord, QuestionsResponse, AnswersResponse, AnswersRecord } from "../pocketbase-types";
import { Collections } from "../pocketbase-types";

const pb = new PocketBase(process.env.PB_URL);
pb.autoCancellation(false);

export async function getQuestionById(id: string) {
    return await pb.collection(Collections.Questions).getOne<QuestionsResponse>(id);
}

export async function getQuestions() {
    return await pb.collection(Collections.Questions).getFullList<QuestionsResponse>();
}

export async function createQuestion(bodyParms: QuestionsRecord) {
    return await pb.collection(Collections.Questions).create(bodyParms);
}

export async function updateQuestionById(id: string, bodyParms: QuestionsRecord) {
    return await pb.collection(Collections.Questions).update(id, bodyParms);
}

export async function deleteQuestionById(id: string) {
    await pb.collection(Collections.Questions).delete(id);
}

export async function getAnswerByQuestionId(questionId: string) {
    try {
        return await pb.collection(Collections.Answers).getFirstListItem<AnswersResponse>(`question_id="${questionId}"`);
    }
    catch {
        throw new Error(`No answer for question id ${questionId}`)
    }
}

export async function deleteAnswerById(answerId: string) {
    await pb.collection(Collections.Answers).delete(answerId);
}

export async function deleteAnswerByQuestionId(questionId: string) {
    const answer = await getAnswerByQuestionId(questionId);
    await deleteAnswerById(answer.id)
}

export async function updateAnswerByAnswerId(answerId: string, bodyParms: AnswersRecord) {
    return await pb.collection(Collections.Answers).update(answerId, bodyParms);
}

export async function createAnswer(bodyParms: AnswersRecord) {
    return await pb.collection(Collections.Answers).create(bodyParms);
}

