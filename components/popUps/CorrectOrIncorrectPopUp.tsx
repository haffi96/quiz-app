import { motion } from "framer-motion"


export interface MessagePopUpParams {
    correct?: boolean,
}

export const CorrectOrIncorrectPopUp = ({ correct }: MessagePopUpParams) => {
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
        </motion.div>
    }
}