import type { QuestionData } from "./types";

export async function getQuestions(): Promise<QuestionData[]> {
    const res = await fetch(
        `${process.env.PB_API}/collections/questions/records?page=1&perPage=30`,
        {
            next: { revalidate: 10 },
        }
    );

    const data = await res.json();
    const questions = data.items;

    return questions;
}
