'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import supabaseBrowser from "../../helpers/supabase-browser";



export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registering, SetRegistering] = useState(false);

    const handleLogin = async (email: string, password: string) => {
        const { error } = await supabaseBrowser.auth.signInWithPassword({ email, password })

        if (error) {
            console.log({ error })
        }

        router.push('/')
    }

    const handleLoginWithGoogle = async () => {
        const { data, error } = await supabaseBrowser.auth.signInWithOAuth({
            provider: 'google',
        })

        if (error) {
            console.log({ error })
        }
    }



    const handleSignup = async (email: string, password: string) => {
        const { data, error } = await supabaseBrowser.auth.signUp({ email, password })

        console.log(data);

        if (error) {
            console.log({ error })
        } else {
            SetRegistering(true)
        }

    }

    const AuthMessage = () => {
        if (registering) {
            return (
                <div className='w-1/4 m-auto mt-10 rounded-xl border-green-400 border-2'>
                    <h1 className='text-center p-3'>Please verify your email</h1>
                </div>
            )
        } else {
            return (
                <h1 className='text-center p-3 m-auto mt-10'>Sign in to Your Account</h1>
            )
        }
    }

    return (
        <>
            <AuthMessage />
            <div className="flex flex-col space-y-2 items-center pt-3">
                <button onClick={() => handleLoginWithGoogle()} className="text-black w-1/2 py-2 bg-blue-300 hover:bg-blue-500">Sign in with google</button>
                <div className="flex flex-row text-gray-400">
                    <p>______</p>
                    <p className="px-2 text-black dark:text-white">or</p>
                    <p>______</p>
                </div>
                <p>Email Address</p>
                <input
                    type="text"
                    placeholder="email"
                    className="w-1/4 p-1 rounded-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <p>Password</p>
                <input
                    type="password"
                    placeholder="password"
                    className="w-1/4 p-1 rounded-lg"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />
                <div className='flex flex-row w-2/3 justify-center space-x-10 py-5'>
                    <button className="text-blue-300">Forgot your password?</button>
                    {/* <button onClick={() => handleSignup(email, password)} className="text-blue-300">Need an account?</button> */}
                </div>
                <button onClick={() => handleLogin(email, password)} className="text-black w-1/2 py-2 bg-blue-300 hover:bg-blue-500">Sign in</button>
                <button onClick={() => handleSignup(email, password)} className="text-black w-1/2 py-2 bg-blue-300 hover:bg-blue-500">Sign up</button>
            </div>
        </>
    );
}