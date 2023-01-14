'use client';

import Link from "next/link";
import type { QuestionData } from "../types";
import { motion } from "framer-motion";

interface QuestionProps {
  question: QuestionData
}

export default function Question({ question }: QuestionProps) {
  const { id, title } = question || {};

  return (
    <>
      <div className="py-2 flex w-1/2 justify-center">
        <Link href={`/questions/${id}`} className="flex w-full justify-center">
          <motion.button whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} className="flex w-full p-5 bg-blue-200 hover:bg-blue-500 dark:bg-red-300 dark:hover:bg-red-500 rounded-full">
            <p>{title}</p>
          </motion.button>
        </Link>

      </div>
    </>
  );
}