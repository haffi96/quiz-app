'use client';

import { ThemeProvider } from "next-themes";
import React from "react";
import { AuthProvider } from "./auth";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class">
            <AuthProvider>
                {children}
            </AuthProvider>
        </ThemeProvider>
    )
}