import Link from "next/link";
import LogOutButton from "./LogOutButton";
import Switcher from "./switcher";

export default function NavBar() {

  return (
    <>
      <nav className="flex flex-row bg-black text-white justify-center p-5 w-full">
        <Link href="/admin" className="absolute top-5 left-5">Admin</Link>
        <Link href="/home" className="px-3">Home</Link>
        <Link href="/questions" className="px-3">Questions</Link>
        <LogOutButton />
        <div className="absolute top-5 right-5">
          <Switcher />
        </div>
      </nav>
    </>

  );
}
