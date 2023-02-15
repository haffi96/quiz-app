'use client';

import { useEffect, useState } from 'react';
import UserContext from '../contexts/UserContext';
import { LocalStorageKeys } from '../enums/LocalStorageKeys';

interface UserProviderProps {
    children: React.ReactNode,
    userId?: string,
    subscribedQuestionSetIds: number[]
}

export default function UserProvider(
    {
        children,
        userId: propsUserId,
        subscribedQuestionSetIds: propsSubscribedQuestionIds
    }: UserProviderProps
) {
    const [userId, setUserId] = useState(propsUserId);
    const [subscribedQuestionSetIds, setSubscribedQuestionSetIds] = useState(propsSubscribedQuestionIds)

    useEffect(() => {
        const localStorageUser = localStorage.getItem(LocalStorageKeys.User)
        if (localStorageUser) {
            const user = JSON.parse(localStorageUser);

            if (user.userId) {
                setUserId(user.userId);
            }

            if (user.setSubscribedQuestionSetIds) {
                setSubscribedQuestionSetIds(user.setSubscribedQuestionSetIds)
            }
        }
    }, [])

    useEffect(() => {
        const user = {
            userId,
            subscribedQuestionSetIds
        }
        localStorage.setItem(LocalStorageKeys.User, JSON.stringify(user))
    }, [subscribedQuestionSetIds, userId])

    return (
        <UserContext.Provider
            value={{ userId, setUserId, subscribedQuestionSetIds, setSubscribedQuestionSetIds }}>
            {children}
        </UserContext.Provider>
    );
}
