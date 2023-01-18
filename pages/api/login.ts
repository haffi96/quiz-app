import type { NextApiRequest, NextApiResponse } from "next";
import { pb_server } from "./server_pb";


const pocketbase_login = async (email: string, password: string) => {
    return await pb_server.collection('users').authWithPassword(email, password)
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const reqBody = req.body

    try {
        await pocketbase_login(reqBody.email, reqBody.password)
    } catch {
        console.log('Failed to login');
    }

    if (pb_server.authStore.isValid) {
        res.status(200).json({"auth": "success"})
    } else {
        res.status(403).json({ "auth": "Failed" })
    }
}