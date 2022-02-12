import { GlobalStyle } from "../GlobalStyle/GlobalStyle";
import {  Outlet } from "react-router-dom";
import { Header, Nav, Link } from "./Layout.styled";
import { Wrapper } from "components/Wrapper";

export const Layout = () => {
    return (
        <>
        <GlobalStyle />
        <Header>
            <Wrapper>
                <Nav>
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                </Nav>
            </Wrapper>
        </Header>
        <Outlet/>
        </>
    )
}