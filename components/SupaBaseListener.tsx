'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import supabase from "../supabaseConfig/supabase-browser";

export default function SupaBaseListener({ accessToken }: { accessToken?: string }) {
    const router = useRouter()

    useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
            if (session?.access_token != accessToken) {
                router.refresh()
            }
        })
    }, [accessToken, router])

    return null
}