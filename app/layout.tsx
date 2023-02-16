import 'server-only'

import "./globals.css";
import { Providers } from "./providers";
import createClient from '../supabaseConfig/supabase-server';
import NavBar from '../components/navBar/NavBar';
import SupabaseProvider from '../providers/SupabaseProvider';
import SupabaseListener from '../listeners/SupabaseListener';
import UserProvider from '../providers/UserProvider';
import type { SupabaseClient } from '@supabase/supabase-js';

// disable caching this layout, so the session isn't cached
export const revalidate = 0

async function getSubscribedToQuestionSetIds(supabaseServerClient: SupabaseClient, userId: string) {
  const { data, error } = await supabaseServerClient.from('users').select('subscribed_to_question_sets').eq('id', userId);

  if (!data || error) {
    console.log('data or error in getQuestionSetsSubscribedTo', error)

    return [];
  }

  const subscribedToQuestionSets = data[0].subscribed_to_question_sets;

  return subscribedToQuestionSets ?? [];
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const userId = session?.user.id
  let subscribedQuestionSetIds: number[] = []

  if (userId) {
    subscribedQuestionSetIds = await getSubscribedToQuestionSetIds(supabase, userId);
  }


  return (
    <html suppressHydrationWarning>
      <body className='flex h-screen flex-col text-4xl dark:bg-slate-900 lg:text-base'>
        <Providers>
          <SupabaseProvider>
            <UserProvider userId={userId} subscribedQuestionSetIds={subscribedQuestionSetIds}>
              <SupabaseListener serverAccessToken={session?.access_token} />
              <NavBar accessToken={session?.access_token} />
              {children}
            </UserProvider>
          </SupabaseProvider>
        </Providers>
      </body>
    </html>
  );
}
