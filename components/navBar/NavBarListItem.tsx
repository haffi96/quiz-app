"use client";

import type { ReactNode } from "react";

interface NavBarListItemProps {
    children: ReactNode;
}

export function NavBarListItem({ children }: NavBarListItemProps) {
    return <li className="mb-8 py-8 lg:m-0 lg:p-0 lg:px-3">{children}</li>;
}
