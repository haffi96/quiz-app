import PocketBase from 'pocketbase';
import type { QuestionsResponse } from "../pocketbase-types";

const pb = new PocketBase(process.env.PB_URL);
pb.autoCancellation(false);

export async function getQuestion(id:string) {
    return await pb.collection('questions').getOne<QuestionsResponse>(id);
}

export async function getQuestions() {
    return await pb.collection('questions').getFullList<QuestionsResponse>();
}