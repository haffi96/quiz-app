'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import type { QuestionsRecord } from "../supabase-types";

interface QuestionProps {
  question: QuestionsRecord
}

export default function Question({ question }: QuestionProps) {
  const { id, title } = question || {};

  return (
    <>
      <div className="py-2 justify-center flex w-1/2">
        <Link href={`/questions/all/${id}`} className="flex w-full justify-center">
          <motion.button whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} className="dark:text-black flex w-full p-5 bg-blue-200 hover:bg-blue-500 rounded-full">
            <p>{title}</p>
          </motion.button>
        </Link>

      </div>
    </>
  );
}