import type { QuestionData } from "../types";

const URL_PREFIX = `${process.env.PB_API}/collections/questions/records`

export async function getQuestions(): Promise<QuestionData[]> {
    const res = await fetch(
        `${URL_PREFIX}?page=1&perPage=30`,
        {
            next: { revalidate: 10 },
        }
    );

    const data = await res.json();
    const questions = data.items;

    return questions;
}

export async function getQuestion(id: string): Promise<QuestionData> {
    const res = await fetch(`${URL_PREFIX}/${id}`);
    
    return await res.json();
}