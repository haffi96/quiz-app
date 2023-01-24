import type { Database } from "../lib/database.types";
import supabaseBrowser from './supabase-browser';

export async function getFirstQuestion() {
    const { data: questions, error } = await supabaseBrowser.from('questions').select('*').limit(1);

    if (error) {
        console.log("Failed");
    } else {
        return questions[0]
    }
}
export async function getQuestionById(id: number) {
    const { data: questions, error } = await supabaseBrowser.from('questions').select('*').eq('id', id).limit(1)

    if (error) {
        console.log("Failed");
    } else {
        return questions[0]
    }
}

export async function getQuestionSets() {
    const { data: question_sets, error } = await supabaseBrowser.from('question_sets').select('*')

    if (error) {
        console.log(error);
    } else {
        return question_sets
    }
}

export async function getAllQuestions() {
    const { data: questions, error } = await supabaseBrowser.from('questions').select('*')

    if (error) {
        console.log(error);
    } else {
        return questions
    }
}

export async function getNextQuestionId(question_id: number) {
    const { data, error } = await supabaseBrowser.from('questions').select('id').gt('id', question_id).limit(1);
    

    if (error) {
        console.log({ error });
    } else {
        return data?.[0].id
    }
}

export async function getPreviousQuestionId(question_id: number) {
    const { data, error } = await supabaseBrowser.from('questions').select('id').lt('id', question_id).limit(1);
    
    if (error) {
        console.log({ error });
    } else {
        return data?.[0].id
    }
}

export async function getAllAnswers() {
    const { data: answers, error } = await supabaseBrowser.from('answers').select('*')
    if (error) {
        console.log("Failed");
    } else {
        return answers
    }
}

export async function createQuestion(bodyParms: Database["public"]["Tables"]["questions"]["Insert"]): Promise<{id: number} | undefined> {
    const { data: id, error } = await supabaseBrowser.from('questions').insert(bodyParms).select()

    if (error) {
        console.log(error);
    } else {
        return id[0]
    }
}

export async function updateQuestionById(id: number, bodyParms: Database["public"]["Tables"]["questions"]["Insert"]) {
    const { error } = await supabaseBrowser.from('questions').update(bodyParms).eq('id', id)

    if (error) {
        console.log(error);
    }

}

export async function deleteQuestionById(id: number) {
    const { error } = await supabaseBrowser.from('questions').delete().eq('id', id)

    if (error) {
        console.log(error);
    }
}

export async function getAnswerByQuestionId(questionId: number){
    const { data: answer, error } = await supabaseBrowser.from('answers').select().eq('question_id', questionId)
    if (error) {
        console.log(`No answer for question id ${questionId}`)
    }
    else {
        return answer[0]
    }
}

export async function deleteAnswerById(answerId: number) {
    const { error } = await supabaseBrowser.from('answers').delete().eq('id', answerId)
    if (error) {
        console.log(error);
    }
}

export async function deleteAnswerByQuestionId(questionId: number) {
    const answer = await getAnswerByQuestionId(questionId);
    if (answer) {
        await deleteAnswerById(answer.id)
    }
}

export async function updateAnswerByAnswerId(answerId: number, bodyParms: Database["public"]["Tables"]["answers"]["Update"]) {
    const { error } = await supabaseBrowser.from('answers').update(bodyParms).eq('id', answerId)

    if (error) {
        console.log(error);
    }
}

export async function createAnswer(bodyParms: { question_id: number; correct_answer_choice: Database["public"]["Enums"]["answer_choices"]; }) {
    const { data: answer, error } = await supabaseBrowser.from('answers').insert(bodyParms).select()

    if (error) {
        console.log(error);
    } else {
        return answer[0]
    }
}

