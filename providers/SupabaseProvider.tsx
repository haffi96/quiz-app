'use client'

import { createContext, useContext, useState } from 'react'

import type { SupabaseClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '../lib/database.types'
import supabaseBrowser from '../supabaseConfig/supabase-browser'

type SupabaseContext = {
    supabase: SupabaseClient<Database>,
}

const SupabaseContext = createContext<SupabaseContext | undefined>(undefined)

export default function SupabaseProvider({ children }: { children: React.ReactNode }) {
    const [supabase] = useState(supabaseBrowser)

    return (
        <SupabaseContext.Provider value={{ supabase }}>
            <>{children}</>
        </SupabaseContext.Provider>
    )
}

export const useSupabase = () => {
    const context = useContext(SupabaseContext);
    if (context === undefined) {
        throw new Error("useSupabase must be used inside SupabaseProvider");
    } else {
        return context;
    }
}