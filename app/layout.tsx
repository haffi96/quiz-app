import 'server-only'

import "./globals.css";
import NavBar from "../components/navbar";
import { Providers } from "./providers";
import createClient from '../helpers/supabase-server';
import SupabaseListener from "../components/supabase-listener";


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
      <body>
        <Providers>
          <SupabaseListener accessToken={session?.access_token} />
          <NavBar accessToken={session?.access_token} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
