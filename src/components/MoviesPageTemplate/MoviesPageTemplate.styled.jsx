import styled from 'styled-components';

export const Section = styled.section`
  text-align: center;
`;

export const FilmList = styled.ul`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FilmItem = styled.li`
    width: 240px;
    border-radius: 10px;
    overflow: hidden;
    background-color: #ec711f;
    transform: scale(1);
    transition: transform 250ms ease;
    :not(:last-child){
        margin-bottom: 30px;
    }
    :hover,
    :focus {
        transform: scale(1.1);
    }
`;

export const FilmItemImg = styled.img`
    width: 290px;
    height: 320px;
    object-fit: fill;
`;

export const DefaultImg = styled.img`
    width: 290px;
    height: 320px;
    object-fit: fill;
`;

export const FilmItemTitle = styled.h3`
    padding: 5px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 400;
    line-height: 133%;

    color: #fff;
`;
