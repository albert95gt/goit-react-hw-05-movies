import { GlobalStyle } from "./GlobalStyle";
import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <GlobalStyle />
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/movies">Movies</NavLink>
            </nav>
            <Outlet/>
        </>
    )
}