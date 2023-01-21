import { RadioGroup } from "@headlessui/react";
import { motion } from "framer-motion";
import type { Database } from "../lib/database.types";

const CHECKED_STYLE = "dark:text-black flex rounded-full pl-3 p-5 bg-blue-400";
const UNCHECKED_STYLE = "dark:text-black flex rounded-full pl-3 p-5 bg-blue-200";

export function RadioGroupOptionWithMotion({ checkedAnswer, answerText, thisAnswerChoice }: { checkedAnswer: Database["public"]["Enums"]["answer_choices"] | undefined, answerText: string | undefined, thisAnswerChoice: Database["public"]["Enums"]["answer_choices"] }) {
    return (
        <motion.div whileHover={{ scale: 1.05 }} animate={{ x: checkedAnswer === thisAnswerChoice ? 5 : 0 }} transition={{ ease: "easeInOut", duration: 0.3 }}>
            <RadioGroup.Option value={thisAnswerChoice}>
                {({ checked }) => (
                    <span className={checked ? CHECKED_STYLE : UNCHECKED_STYLE}>
                        {answerText}
                    </span>
                )}
            </RadioGroup.Option>
        </motion.div>
    )
}