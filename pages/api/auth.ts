import type { NextApiRequest, NextApiResponse } from "next";
import { pb_server } from "./server_pb";


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const authData = pb_server.authStore

    if (pb_server.authStore.isValid) {
        res.status(200).json(JSON.stringify(authData))
    } else {
        res.status(403).json({'auth': 'failed'})
    }
}