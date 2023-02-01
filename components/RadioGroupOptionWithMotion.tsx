import { RadioGroup } from "@headlessui/react";
import { motion } from "framer-motion";
import type { Database } from "../lib/database.types";

const CHECKED_STYLE = "dark:text-black flex rounded-full pl-3 p-5 bg-blue-400";
const UNCHECKED_STYLE = "dark:text-black flex rounded-full pl-3 p-5 bg-blue-200";


const choiceChosenMessage = (
    choiceChosenPercent: number,
    answered: boolean | undefined
) => {
    const roundedPercent = Math.round(choiceChosenPercent * 100)

    if (answered && choiceChosenPercent === 0) {
        return <>
            <div className="text-center">
                0%
            </div>
        </>
    } else {
        return <>
            <div className="text-center">
                {roundedPercent}%
            </div>
        </>
    }

}

type answerChoice = Database["public"]["Enums"]["answer_choices"]

interface ChoiceDataParams {
    checkedAnswer: answerChoice,
    answerText?: string,
    thisAnswerChoice: answerChoice,
    answered?: boolean,
    choiceChosenPercent: number,
    correctChoice?: answerChoice
}

export function RadioGroupOptionWithMotion(params: ChoiceDataParams) {
    const { checkedAnswer, answerText, thisAnswerChoice, answered, choiceChosenPercent, correctChoice } = params

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            animate={{ x: checkedAnswer === thisAnswerChoice ? 5 : 0 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
        >
            <RadioGroup.Option value={thisAnswerChoice}>
                {({ checked }) => (
                    <>
                        <span className={checked ? CHECKED_STYLE : UNCHECKED_STYLE}>
                            <div>
                                {answerText}
                            </div>
                            <div className={thisAnswerChoice === correctChoice ? "m-auto w-1/4 rounded-xl bg-green-300" : "m-auto w-1/4 rounded-xl bg-red-300"}>
                                {answered != undefined ? choiceChosenMessage(choiceChosenPercent, answered) : null}
                            </div>
                        </span>
                    </>
                )}
            </RadioGroup.Option>
        </motion.div>
    )
}
