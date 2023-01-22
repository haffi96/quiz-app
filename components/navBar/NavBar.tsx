"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import LogOut from "../buttons/LogOutButton";
import { NavBarListItem } from "./NavBarListItem";
import Switcher from "../Switcher";
import { usePathname } from 'next/navigation'

export default function NavBar({ accessToken }: { accessToken?: string }) {
  const pathname = usePathname();
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    setIsHidden(true);
  }, [pathname]);

  const maybeAppendHiddenStyle = () => isHidden ? ' hidden' : ''

  const LoggedInContents = (
    <>
      <NavBarListItem><Link href='/admin/questions'>Admin</Link></NavBarListItem>
      <NavBarListItem><Link href='/questions/all'>Questions</Link></NavBarListItem>
      <NavBarListItem><LogOut /></NavBarListItem>
    </>
  )

  const LoggedOutContents = <NavBarListItem><li><Link href="/login">Login</Link></li></NavBarListItem>

  const onClick = () => {
    setIsHidden(!isHidden)
  }

  return (
    // absolute or fixed might be better than sticky
    <nav className="sticky top-0 w-full bg-black text-left text-white">
      <button type="button" onClick={onClick} className="ml-3 inline-flex items-center p-2 lg:hidden" aria-controls="navbar-default" aria-expanded="false">
        <svg className="h-32 w-32" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
      </button>

      <div className={'justify-center lg:flex lg:justify-center' + maybeAppendHiddenStyle()}>
        <ul className="flex-col pb-4 text-center lg:flex lg:flex-row lg:p-5">
          <NavBarListItem><Link href='/'>Home</Link></NavBarListItem>
          {accessToken ? LoggedInContents : LoggedOutContents}
        </ul>
        <div className="absolute top-5 right-5">
          <Switcher />
        </div>
      </div>
    </nav>
  )
}