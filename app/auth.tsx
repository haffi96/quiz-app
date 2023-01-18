'use client';

import React, { useEffect } from "react";
import { pb_client } from "../helpers/pocketbaseHelper";
import { useRouter } from "next/navigation";

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    useEffect(() => {
        if (!pb_client.authStore.isValid) {
            router.push('/login')
        }

    }, [router])

    return (
        <>
            {children}
        </>
    )

}
