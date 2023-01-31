import { motion } from "framer-motion"
import type { Database } from "../../lib/database.types"


export interface MessagePopUpParams {
    correct?: boolean,
    questionAnswerCounts?: Database["public"]["Tables"]["submission"]["Row"],
}

export const CorrectOrIncorrectPopUp = ({ correct, questionAnswerCounts }: MessagePopUpParams) => {
    if (correct === undefined) {
        return null
    }

    if (correct) {
        return <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                default: { duration: 0.5, delay: 0.1, ease: [0, 0.71, 0.2, 1.01] },
                scale: { type: "spring", damping: 10, stiffness: 100, restDelta: 0.001 }
            }}
            className="w-2/3 rounded-xl bg-green-300 p-2 dark:text-black">
            Correct answer!
            Submissions:
            Answer 1: {questionAnswerCounts?.a1_count},
            Answer 2: {questionAnswerCounts?.a2_count},
            Answer 3: {questionAnswerCounts?.a3_count},
            Answer 4: {questionAnswerCounts?.a4_count}
        </motion.div>
    } else {
        return <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                default: { duration: 0.5, delay: 0.1, ease: [0, 0.71, 0.2, 1.01] },
                scale: { type: "spring", damping: 10, stiffness: 100, restDelta: 0.001 }
            }}
            className="w-2/3 rounded-xl bg-red-400 p-2 dark:text-black">
            Incorrect!
            Submissions:
            Answer 1: {questionAnswerCounts?.a1_count},
            Answer 2: {questionAnswerCounts?.a2_count},
            Answer 3: {questionAnswerCounts?.a3_count},
            Answer 4: {questionAnswerCounts?.a4_count}
        </motion.div>
    }
}