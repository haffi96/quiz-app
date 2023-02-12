"use client";

import type { ReactNode } from "react";

interface NavBarListItemProps {
    children: ReactNode;
    isHiddenOnLargeScreens?: boolean
}

export function NavBarListItem({ children, isHiddenOnLargeScreens }: NavBarListItemProps) {
    return <li className={`mb-8 py-8 lg:m-0 lg:p-0 lg:px-3 ${isHiddenOnLargeScreens ? 'lg:hidden' : ''}`} >{children}</li>;
}
