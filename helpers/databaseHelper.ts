import PocketBase from 'pocketbase';
import type { QuestionsRecord, QuestionsResponse, AnswersResponse } from "../pocketbase-types";
import { Collections } from "../pocketbase-types";

const pb = new PocketBase(process.env.PB_URL);
pb.autoCancellation(false);

export async function getQuestion(id: string) {
    return await pb.collection(Collections.Questions).getOne<QuestionsResponse>(id);
}

export async function getQuestions() {
    return await pb.collection(Collections.Questions).getFullList<QuestionsResponse>();
}

export async function createQuestion(bodyParms: QuestionsRecord) {
    return await pb.collection(Collections.Questions).create<QuestionsRecord>(bodyParms);
}

export async function editQuestion(id: string, bodyParms: QuestionsRecord) {
    return await pb.collection(Collections.Questions).update<QuestionsRecord>(id, bodyParms);
}

export async function getAnswer(questionID: string) {
    return await pb.collection(Collections.Answers).getFirstListItem<AnswersResponse>(`question_id="${questionID}"`);
}