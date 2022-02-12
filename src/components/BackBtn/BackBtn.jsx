import { useLocation, useNavigate } from "react-router-dom"
import { BackBtnStyled } from "./BackBtn.styled";
import { BsArrowLeft } from "react-icons/bs"

export const BackBtn = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(location?.state?.from ?? '/movies');
    } 
    return (
        <BackBtnStyled type="button" onClick={handleClick}><BsArrowLeft size='20px'/> Go back</BackBtnStyled>
    )
}
