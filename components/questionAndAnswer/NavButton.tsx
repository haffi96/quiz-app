import { motion } from "framer-motion";
import Link from "next/link";

export const NavButton = (props: { text: string, routeToPath: string }) => {
    return <motion.button whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} className="rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white dark:hover:text-white">
        <Link href={props.routeToPath} >{props.text}</Link>
    </motion.button>
}