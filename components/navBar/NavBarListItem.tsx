"use client";

import type { ReactNode } from "react";

interface NavBarListItemProps {
    children: ReactNode;
}

export function NavBarListItem({ children }: NavBarListItemProps) {
    return <li className="py-8 lg:p-0 lg:px-3">{children}</li>;
}
