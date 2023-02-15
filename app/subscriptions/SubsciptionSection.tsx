'use client'
import type { Dispatch, SetStateAction } from 'react';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import type { Database } from '../../lib/database.types';
import supabaseBrowser from '../../supabaseConfig/supabase-browser';

export async function addQuestionSetToUserSubscriptions(
    currentQuestionSetIds: number[],
    setSubscribedQuestionSetIds: Dispatch<SetStateAction<number[]>> | null,
    questionSetId: number,
    userId?: string
) {
    const newIds = [...currentQuestionSetIds, questionSetId];

    if (newIds && setSubscribedQuestionSetIds) {
        await supabaseBrowser.from('users').update({ subscribed_to_question_sets: newIds }).eq('id', userId);
        setSubscribedQuestionSetIds(newIds);
    }
}

export async function removeQuestionSetToUserSubscriptions(
    currentQuestionSetIds: number[],
    setSubscribedQuestionSetIds: Dispatch<SetStateAction<number[]>> | null,
    questionSetId: number,
    userId?: string
) {
    const newArray = [...currentQuestionSetIds].filter((id) => id !== questionSetId);

    if (newArray && setSubscribedQuestionSetIds) {
        await supabaseBrowser.from('users').update({ subscribed_to_question_sets: newArray }).eq('id', userId);
        setSubscribedQuestionSetIds(newArray)
    }
}

export interface SubsciptionSectionProps {
    questionSets: Database['public']['Tables']['question_sets']['Row'][]
}

export function SubsciptionSection({ questionSets }: SubsciptionSectionProps) {
    const { subscribedQuestionSetIds, userId, setSubscribedQuestionSetIds } = useContext(UserContext); // abit of a pisstake

    const subscribedQuestionSets = questionSets
        .filter((set) => subscribedQuestionSetIds.includes(set.id));

    const notSubscribedQuestionSets = questionSets
        .filter((set) => !subscribedQuestionSetIds.includes(set.id));

    return (
        <>
            <h1>You Are Subscribed To These Question Sets:</h1>

            {subscribedQuestionSets.map((set) => <li key={set.id}>{set.name}
                <button onClick={() => removeQuestionSetToUserSubscriptions(
                    subscribedQuestionSetIds,
                    setSubscribedQuestionSetIds,
                    set.id,
                    userId)}>
                    -
                </button>
            </li>
            )}

            <br />

            <h1>You Are Subscribed To These Question Sets:</h1>

            {notSubscribedQuestionSets.map(
                (set) => <li key={set.id}>{set.name}
                    <button onClick={() => addQuestionSetToUserSubscriptions(
                        subscribedQuestionSetIds,
                        setSubscribedQuestionSetIds,
                        set.id,
                        userId)}>
                        +
                    </button>
                </li>
            )}
        </>
    );
}
