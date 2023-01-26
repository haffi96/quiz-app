import { NavButton } from "./NavButton"

export const NextButton = ({ correct, routeToPath }: { correct?: boolean, routeToPath?: string }) => {
    if (correct && routeToPath) {
        return <NavButton text="Next" routeToPath={routeToPath} />
    } else {
        return null
    }
}