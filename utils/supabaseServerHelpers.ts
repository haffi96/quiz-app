import type { SupabaseClient } from '@supabase/supabase-js';


export async function getCustomerInfo(supabase: SupabaseClient, userId?: string) {
    const { data, error } = await supabase.from("customers").select("*").eq("user_uuid", userId).limit(1)

    if (error) {
        console.log(error);
    } else {
        return data[0]
    }
}

export async function getSubscribedToQuestionSetIds(supabaseServerClient: SupabaseClient, userId: string) {
    const { data, error } = await supabaseServerClient.from('users').select('subscribed_to_question_sets').eq('id', userId);

    if (!data || error) {
      console.log('data or error in getQuestionSetsSubscribedTo', error)

      return [];
    }

    const subscribedToQuestionSets = data[0]?.subscribed_to_question_sets;

    return subscribedToQuestionSets ?? [];
  }


export async function checkCustomerSubscriptionStatus(supabaseServerClient: SupabaseClient, userId: string) {
    const { data, error } = await supabaseServerClient.from("customers").select('is_subscribed').eq("user_uuid", userId).limit(1)
    if (error) {
      console.log(error);
    } else {
      return data[0]?.is_subscribed
    }
  }


