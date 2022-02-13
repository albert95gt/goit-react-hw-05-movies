import styled from 'styled-components';

export const Form = styled.form`
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    width: 150px;
    height: 35px;
    border-radius: 10px;
    padding-left: 5px;
    border: none;
    outline: none;
    color: #313131;
    font-size: 16px;
    font-family: cursive;
    margin-right: 5px;

    :focus-visible {
        border: solid 2px #e9691f;
    }

    @media screen and (min-width: 768px) {
        width: 260px;
    }

    @media screen and (min-width: 1440px) {
        width: 300px;
        height: 50px;
        font-size: 20px;
    }
`;

export const SearchBtn = styled.button`
    width: 72px;
    height: 35px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-family: cursive;
    color: #fff;
    cursor: pointer;
    background: #e9691f;
    transition: background 250ms ease;

    :hover,
    :focus {
        background: #f85c01;
    }

    @media screen and (min-width: 1440px) {
        width: 100px;
        height: 50px;
        font-size: 20px;
    }
`;