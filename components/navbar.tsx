import Link from "next/link";
import LogOut from "./LogOutButton";
import Switcher from "./switcher";


export default function NavBar({ accessToken }: { accessToken?: string }) {

  const Nav = () => {
    if (accessToken) {
      return (
        <LoggedInNavBar />
      )
    } else {
      return (<LoggedOutNavBar />)
    }
  }


  const LoggedInNavBar = () => {
    return (
      <>
        <nav className="flex flex-row bg-black text-white justify-center p-5 w-full">
          <Link href="/" className="px-3">Home</Link>
          <Link href="/admin/questions" className="absolute top-5 left-5">Admin</Link>
          <Link href="/questions/all" className="px-3">Questions</Link>
          <LogOut />
          <div className="absolute top-5 right-5">
            <Switcher />
          </div>
        </nav>
      </>

    );
  }

  const LoggedOutNavBar = () => {
    return (
      <>
        <nav className="flex flex-row bg-black text-white justify-center p-5 w-full">
          <Link href="/" className="px-3">Home</Link>
          <Link href="/login">Login</Link>
          <div className="absolute top-5 right-5">
            <Switcher />
          </div>
        </nav>
      </>

    );
  }

  return (
    <>
      <Nav />
    </>

  );
}