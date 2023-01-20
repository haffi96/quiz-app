'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import supabaseBrowser from "../../helpers/supabase-browser";


const handleLogin = async (email: string, password: string, router: AppRouterInstance) => {
    console.log('logging in');
    const { error } = await supabaseBrowser.auth.signInWithPassword({ email, password })

    if (error) {
        console.log({ error })
    }

    router.push('/')
}

const handleSignup = async (email: string, password: string, router: AppRouterInstance) => {
    console.log('sign up');
    const { data, error } = await supabaseBrowser.auth.signUp({ email, password })

    console.log(data);

    if (error) {
        console.log({ error })
    }

    router.push('/')
}

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <h1 className='font-bold text-center pt-20'>Please login!</h1>
            <div className="flex flex-col space-y-3 items-center pt-10">
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />
                <button onClick={() => handleLogin(email, password, router)} className="text-black px-3 py-2 bg-blue-300 hover:bg-blue-500">Login</button>
                <button onClick={() => handleSignup(email, password, router)} className="text-black px-3 py-2 bg-blue-300 hover:bg-blue-500">Register</button>
            </div>
        </>
    );
}