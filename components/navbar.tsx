import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className="bg-black text-white text-center p-5 mb-5">
          <Link href="/" className="px-3">Home</Link>
          <Link href="/questions" className="px-3">Questions</Link>
        </nav>
    </>
  );
}