'use client';

import Link from "next/link";
import { pb_client } from "../helpers/pocketbaseHelper";

export default function LogOutButton() {
    return (
        <>
            <Link href="/login">
                <button onClick={() => { pb_client.authStore.clear() }}>Log out</button>
            </Link>
        </>
    );
}