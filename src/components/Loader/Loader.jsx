import { BounceLoader } from "react-spinners";
import { SpinnerContainer } from "./Loader.styled";

export const Spinner = () => {
    return <SpinnerContainer>
        <BounceLoader color="#ec711f"/>
    </SpinnerContainer>
}