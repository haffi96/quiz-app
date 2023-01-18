import { AuthProvider } from "../auth";

export default function HomePageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <AuthProvider>
                {children}
            </AuthProvider>
        </>
    );
}