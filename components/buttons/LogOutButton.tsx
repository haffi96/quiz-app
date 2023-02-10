'use client';
import supabaseBrowser from "../../supabaseConfig/supabase-browser";
import Router from "next/router";

export default function LogOut() {
    const handleLogout = async () => {
        const { error } = await supabaseBrowser.auth.signOut()

        if (error) {
            console.log({ error })
            Router.reload()
        }
    }

    return (
        <>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}