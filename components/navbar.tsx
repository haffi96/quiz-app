import Link from "next/link";
import Switcher from "./switcher";

export default function NavBar() {
  return (
    <>
      <nav className="flex flex-row bg-black text-white p-5 mb-5 justify-center">
        <Link href="/" className="px-3">Home</Link>
        <Link href="/questions" className="px-3">Questions</Link>
        <Link href="/admin" className="px-3">Admin</Link>
        <Switcher />
      </nav>
    </>
  );
}