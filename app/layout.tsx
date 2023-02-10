import 'server-only'

import "./globals.css";
import { Providers } from "./providers";
import createClient from '../supabaseConfig/supabase-server';
import SupaBaseListener from '../components/SupaBaseListener';
import NavBar from '../components/navBar/NavBar';

// disable caching this layout, so the session isn't cached
export const revalidate = 0

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <html suppressHydrationWarning>
      <body className='flex h-screen flex-col text-4xl dark:bg-slate-900 lg:text-base'>
        <Providers>
          <SupaBaseListener accessToken={session?.access_token} />
          <NavBar accessToken={session?.access_token} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
