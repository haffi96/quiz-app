import Link from "next/link";
import LogOut from "./LogOutButton";
import Switcher from "./Switcher";

export default function NavBar({ accessToken }: { accessToken?: string }) {
  const LoggedInContents = (
    <>
      <Link href="/admin/questions" className="absolute top-5 left-5">Admin</Link>
      <Link href="/questions/all" className="px-3">Questions</Link>
      <LogOut />
    </>
  )

  const LoggedOutContents = <Link href="/login">Login</Link>

  return (
    <nav className="flex flex-row bg-black text-white justify-center p-5 w-full">
      <Link href="/" className="px-3">Home</Link>
      {accessToken ? LoggedInContents : LoggedOutContents}
      <div className="absolute top-5 right-5">
        <Switcher />
      </div>
    </nav>
  )
}