import "./globals.css";
import NavBar from "../components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <NavBar />
        {children}
        </body>
    </html>
  );
}
