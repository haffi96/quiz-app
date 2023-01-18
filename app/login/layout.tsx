import { AuthProvider } from "../auth";

export default function LoginPageLayout({
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