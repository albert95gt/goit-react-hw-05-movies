import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import img from '../../images/background.jpg'


export const Header = styled.header`
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #2b2b2b;
    background-image: linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.644)),
    url(${img});
    background-size: cover;
    object-fit: fill;
    background-position: top;
    background-repeat: no-repeat;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;  
`;

export const Link = styled(NavLink)`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
    font-weight: 500;
    margin-left: 20px;
    text-decoration: none;
    color: #fff;
    transform: scale(1);
    transition: transform 250ms ease;

    &.active{
        color: #ec711f;
    }
    
    :hover,
    :focus {
    transform: scale(1.1);
    }

    @media screen and (min-width: 1440px) {
        font-size: 24px;
    }
`;