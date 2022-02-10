import { useLocation, useNavigate } from "react-router-dom"

export const BackBtn = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(location?.state?.from ?? '/movies');
    } 
    return (
        <button type="button" onClick={handleClick}>Go back</button>
    )
}
