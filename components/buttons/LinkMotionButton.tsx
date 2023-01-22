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
            <div className="py-2 justify-center flex w-1/2">
                <Link href={href} className="flex w-full justify-center">
                    <motion.button whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} className="dark:text-black flex w-full p-5 bg-blue-200 hover:bg-blue-500 rounded-full">
                        <p>{text}</p>
                    </motion.button>
                </Link>
            </div>
        </>
    );
}
