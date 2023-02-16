import 'server-only'

import "./globals.css";
import createSupabaseServerClient from '../supabaseConfig/supabase-server';
import NavBar from '../components/navBar/NavBar';
import SupabaseProvider from '../providers/SupabaseProvider';
import ThemeSettingProvider from '../providers/ThemeSettingProvider';
import SupabaseListener from '../listeners/SupabaseListener';
import UserProvider from '../providers/UserProvider';
import { getSubscribedToQuestionSetIds, checkCustomerSubscriptionStatus } from '../utils/supabaseServerHelpers';

// disable caching this layout, so the session isn't cached
export const revalidate = 0

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createSupabaseServerClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const userId = session?.user.id
  let subscribedQuestionSetIds: number[] = []

  let is_subscribed;
  if (userId) {
    subscribedQuestionSetIds = await getSubscribedToQuestionSetIds(supabase, userId);
    is_subscribed = await checkCustomerSubscriptionStatus(supabase, userId)
  }

  return (
    <html suppressHydrationWarning>
      <body className='flex h-screen flex-col text-4xl dark:bg-slate-900 lg:text-base'>
        <ThemeSettingProvider>
          <SupabaseProvider>
            <UserProvider userId={userId} subscribedQuestionSetIds={subscribedQuestionSetIds}>
              <SupabaseListener serverAccessToken={session?.access_token} />
              <NavBar accessToken={session?.access_token} is_subscribed={is_subscribed} />
              {children}
            </UserProvider>
          </SupabaseProvider>
        </ThemeSettingProvider>
      </body>
    </html>
  );
}
