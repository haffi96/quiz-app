'use client'

import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';

type UserContexProps = { 
    userId?: string,
    setUserId: Dispatch<SetStateAction<string | undefined>> | null,
    subscribedQuestionSetIds: number[]
    setSubscribedQuestionSetIds: Dispatch<SetStateAction<number[]>> | null,
}

const UserContext = createContext<UserContexProps>({
    setUserId: null,
    subscribedQuestionSetIds: [],
    setSubscribedQuestionSetIds: null
});

export default UserContext;