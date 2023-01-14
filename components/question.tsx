import Link from "next/link";
import type { QuestionData } from "../types";

interface QuestionProps {
  question: QuestionData
}

export default function Question({ question }: QuestionProps) {
  const { id, title } = question || {};

  return (
    <>
      <div className="py-2 flex w-1/2 justify-center">
        <Link href={`/questions/${id}`} className="flex w-full justify-center">
          <div className="flex w-full p-5 bg-blue-200 hover:bg-blue-500 dark:bg-red-300 dark:hover:bg-red-500 rounded-full">
            <p>{title}</p>
          </div>
        </Link>

      </div>
    </>
  );
}