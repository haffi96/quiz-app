import "./globals.css";
import NavBar from "../components/navbar";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Providers>
          <NavBar />
          {children}
        </Providers>
        </body>
    </html>
  );
}
