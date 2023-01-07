import Link from "next/link";

export default function Question({ question }: any) {
    const { id, title } = question || {};
  
    return (
      <>
      <div>
        <Link href={`/questions/${id}`}>
          <div className="bg-red-300 text-center px-5">
            <p>{title}</p>
          </div>
        </Link>
      </div>
      </>
    );
  }