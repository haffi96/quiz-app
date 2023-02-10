import { NavButton } from "./NavButton"

export const NextButton = ({ correct, routeToPath }: { correct?: boolean, routeToPath?: string }) => {
    return typeof correct !== 'undefined' && routeToPath ? <NavButton text="Next" routeToPath={routeToPath} /> : null;
}