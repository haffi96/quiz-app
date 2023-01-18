'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { pb_client } from "../../helpers/pocketbaseHelper";


const handleLogin = async (email: string, password: string, router: AppRouterInstance) => {
    const authData = await pb_client.collection('users').authWithPassword(email, password)
    console.log(authData);

    if (pb_client.authStore.isValid) {
        router.push('/home')
    }
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
            </div>
        </>
    );
}
