"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { NavBarListItem } from "./NavBarListItem";
import { usePathname } from 'next/navigation'
import AccountMenuDropDown from "../MenuDropDown";
import { handleLogout } from "../../utils/handleLogout";

export default function NavBar({ accessToken }: { accessToken?: string }) {
  const pathname = usePathname();
  const [isHidden, setIsHidden] = useState(true);
  const isLoggedIn = Boolean(accessToken);

  useEffect(() => {
    setIsHidden(true);
  }, [pathname]);

  const maybeAppendHiddenStyle = () => isHidden ? ' hidden' : ''

  const LoggedInContents = (
    <>
      <NavBarListItem><Link href="/pricing">Pricing</Link></NavBarListItem>
      <NavBarListItem><Link href='/admin/questions'>Admin</Link></NavBarListItem>
      <NavBarListItem><Link href='/questions/all'>Questions</Link></NavBarListItem>
      <NavBarListItem isHiddenOnLargeScreens={true}><Link href='/profile'>Account</Link></NavBarListItem>
      <NavBarListItem isHiddenOnLargeScreens={true}><button onClick={handleLogout}>Logout</button></NavBarListItem>
    </>
  )

  const LoggedOutContents = (
    <>
      <NavBarListItem><Link href="/pricing">Pricing</Link></NavBarListItem>
      <NavBarListItem><Link href="/login">Login</Link></NavBarListItem>
    </>
  )

  const onClick = () => {
    setIsHidden(!isHidden)
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-black text-white">
      <button type="button" onClick={onClick} className="ml-3 inline-flex items-center p-2 lg:hidden" aria-controls="navbar-default" aria-expanded="false">
        <svg className="h-32 w-32" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
      </button>
      {isLoggedIn && <AccountMenuDropDown />}

      <div className={'justify-center lg:flex lg:justify-center' + maybeAppendHiddenStyle()}>
        <ul className="flex-col text-center lg:flex lg:flex-row lg:p-5">
          <NavBarListItem><Link href='/'>Home</Link></NavBarListItem>
          {isLoggedIn ? LoggedInContents : LoggedOutContents}
        </ul>
      </div>
    </nav>
  )
}
