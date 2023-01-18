import { AuthProvider } from "../auth";

export default function QuestionsLayout({
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