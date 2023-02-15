import supabaseBrowser from '../../supabaseConfig/supabase-browser';
import type { Database } from '../../lib/database.types';
import { SubsciptionSection } from '../subscriptions/SubsciptionSection';

async function getAllQuestionSets() {
    const { data, error } = await supabaseBrowser.from('question_sets').select('*')

    if (error) {
        console.error(error);
        return []
    }

    if (!data) {
        console.log('no data')
        return []
    }

    return data
}

export async function addQuestionSetToUserSubscriptions(currentQuestionSetIds: number[], questionSetId: number) {
    await supabaseBrowser.from('users').update({ 'subscribed_to_question_sets': [...currentQuestionSetIds, questionSetId] })
}

export async function removeQuestionSetToUserSubscriptions(currentQuestionSetIds: number[], questionSetId: number) {
    const newArray = [...currentQuestionSetIds].filter((id) => id !== questionSetId);
    await supabaseBrowser.from('users').update({ 'subscribed_to_question_sets': newArray })
}

export interface SubsciptionSectionProps {
    subscribedQuestionSetIds: number[],
    questionSets: Database['public']['Tables']['question_sets']['Row'][]
}

export default async function Page() {
    const questionSets = await getAllQuestionSets();

    return (
        <div className="container m-auto flex flex-col space-y-5 text-center">
            <SubsciptionSection questionSets={questionSets} />
        </div>
    )
}