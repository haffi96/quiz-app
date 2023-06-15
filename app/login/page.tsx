'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import supabaseBrowser from "../../supabaseConfig/supabase-browser";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registering, SetRegistering] = useState(false);

    useEffect(() => {
        if (process.env.DEMO === 'true') {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            setEmail(process.env.DEMO_USER!)
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            setPassword(process.env.DEMO_PASS!)
        }
    }, []);


    const handleLogin = async (email: string, password: string) => {
        const { error } = await supabaseBrowser.auth.signInWithPassword({ email, password })

        if (error) {
            console.log({ error })
        }

        router.push('/')
    }

    const handleLoginWithGoogle = async () => {
        const { error } = await supabaseBrowser.auth.signInWithOAuth({
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
                <div className='m-auto mt-10 w-1/4 rounded-xl border-2 border-green-400'>
                    <h1 className='p-3 text-center'>Please verify your email</h1>
                </div>
            )
        } else {
            return (
                <h1 className='m-auto mt-10 p-3 text-center'>Sign in to Your Account</h1>
            )
        }
    }

    const DemoMessage = () => {
        if (process.env.DEMO === 'true') {
            return (
                <div className='m-auto mt-10 w-2/4 rounded-xl border-2 border-green-400'>
                    <h1 className='p-3 text-center'>Demo mode. Credentials have been pre-filled. Press Sign in.</h1>
                </div>
            )
        } else {
            return <div></div>
        }
    }

    return (
        <>
            <div className="block">
                <DemoMessage />
                <AuthMessage />
                <div className="flex flex-col items-center space-y-2 pt-3">
                    <button onClick={() => handleLoginWithGoogle()} className="w-1/2 bg-blue-300 py-2 text-black hover:bg-blue-500">Sign in with google</button>
                    <div className="flex flex-row text-gray-400">
                        <p>______</p>
                        <p className="px-2 text-black dark:text-white">or</p>
                        <p>______</p>
                    </div>
                    <p>Email Address</p>
                    <input
                        type="text"
                        placeholder="email"
                        className="w-1/4 rounded-lg p-1"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <p>Password</p>
                    <input
                        type="password"
                        placeholder="password"
                        className="w-1/4 rounded-lg p-1"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                    <div className='flex w-2/3 flex-row justify-center space-x-10 py-5'>
                        <button className="text-blue-300">Forgot your password?</button>
                    </div>
                    <button onClick={() => handleLogin(email, password)} className="w-1/2 bg-blue-300 py-2 text-black hover:bg-blue-500">Sign in</button>
                    <button onClick={() => handleSignup(email, password)} className="w-1/2 bg-blue-300 py-2 text-black hover:bg-blue-500">Sign up</button>
                </div>
            </div>
        </>
    );
}