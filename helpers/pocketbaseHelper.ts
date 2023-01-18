import PocketBase from 'pocketbase';
import type { QuestionsRecord, QuestionsResponse, AnswersResponse, AnswersRecord } from "../pocketbase-types";
import { Collections } from "../pocketbase-types";

export const pb_client = new PocketBase(process.env.PB_URL);
pb_client.autoCancellation(false);

pb_client.collection('users').authWithPassword('admin', 'password')
console.log(pb_client.authStore.isValid);


export async function getQuestionById(id: string) {
    console.log(pb_client.authStore.isValid);

    return await pb_client.collection(Collections.Questions).getOne<QuestionsResponse>(id);
}

export async function getQuestions() {
    return await pb_client.collection(Collections.Questions).getFullList<QuestionsResponse>();
}

export async function getAnswers() {
    return await pb.collection(Collections.Answers).getFullList<AnswersResponse>();
}

export async function createQuestion(bodyParms: QuestionsRecord) {
    return await pb_client.collection(Collections.Questions).create(bodyParms);
}

export async function updateQuestionById(id: string, bodyParms: QuestionsRecord) {
    return await pb_client.collection(Collections.Questions).update(id, bodyParms);
}

export async function deleteQuestionById(id: string) {
    await pb_client.collection(Collections.Questions).delete(id);
}

export async function getAnswerByQuestionId(questionId: string) {
    try {
        return await pb_client.collection(Collections.Answers).getFirstListItem<AnswersResponse>(`question_id="${questionId}"`);
    }
    catch {
        throw new Error(`No answer for question id ${questionId}`)
    }
}

export async function deleteAnswerById(answerId: string) {
    await pb_client.collection(Collections.Answers).delete(answerId);
}

export async function deleteAnswerByQuestionId(questionId: string) {
    const answer = await getAnswerByQuestionId(questionId);
    await deleteAnswerById(answer.id)
}

export async function updateAnswerByAnswerId(answerId: string, bodyParms: AnswersRecord) {
    return await pb_client.collection(Collections.Answers).update(answerId, bodyParms);
}

export async function createAnswer(bodyParms: AnswersRecord) {
    return await pb_client.collection(Collections.Answers).create(bodyParms);
}
