'use client';
import Link from "next/link";
import { motion } from "framer-motion";

interface LinkMotionButtonProps {
    href: string,
    text: string
}

export function LinkMotionButton({ text, href }: LinkMotionButtonProps) {
    return (
        <>
            <div className="flex w-1/2 justify-center py-2">
                <Link href={href} className="flex w-full justify-center">
                    <motion.button whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} className="flex w-full rounded-full bg-blue-200 p-5 hover:bg-blue-500 dark:text-black">
                        <p>{text}</p>
                    </motion.button>
                </Link>
            </div>
        </>
    );
}
