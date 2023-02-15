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