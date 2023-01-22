"use client"

import Link from "next/link";
import type { ReactNode } from "react";
import { useState } from "react";
import LogOut from "./LogOutButton";
import Switcher from "./Switcher";

interface NavBarListItemProps {
  children: ReactNode
}

function NavBarListItem({ children }: NavBarListItemProps) {
  return <li className="py-8 lg:p-0 lg:px-3">{children}</li>
}

interface NavBarListItemLinkProps {
  href: string,
  children: ReactNode
}

function NavBarListItemLink({ href, children }: NavBarListItemLinkProps) {
  return <NavBarListItem><Link href={href}>{children}</Link></NavBarListItem>
}

export default function NavBar({ accessToken }: { accessToken?: string }) {
  const [isHidden, setIsHidden] = useState(true);

  const maybeAppendHiddenStyle = () => isHidden ? ' hidden' : ''

  const LoggedInContents = (
    <>
      <NavBarListItemLink href='/admin/questions'>Admin</NavBarListItemLink>
      <NavBarListItemLink href='/questions/all'>Questions</NavBarListItemLink>
      <NavBarListItem><LogOut /></NavBarListItem>
    </>
  )

  const LoggedOutContents = <li><Link href="/login">Login</Link></li>

  const onClick = () => {
    setIsHidden(!isHidden)
  }

  return (
    <nav className="bg-blue-900 text-white text-left">
      <button type="button" onClick={onClick} className="inline-flex items-center p-2 ml-3 lg:hidden" aria-controls="navbar-default" aria-expanded="false">
        <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
      </button>

      <div className={'justify-center lg:flex lg:justify-center' + maybeAppendHiddenStyle()}>
        <ul className="text-center pb-4 flex-col lg:flex lg:flex-row lg:p-5">
          <NavBarListItemLink href='/'>Home</NavBarListItemLink>
          {accessToken ? LoggedInContents : LoggedOutContents}
        </ul>
        <div className="absolute top-5 right-5">
          <Switcher />
        </div>
      </div>
    </nav>
  )
}
