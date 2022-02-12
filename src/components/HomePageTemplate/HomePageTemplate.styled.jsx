import styled from 'styled-components';

export const Section = styled.section`
  text-align: center;
  background: #383838;
`;
export const HomePageTitle = styled.h2`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 20px;
    color: #ec711f;
`;

export const FilmList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FilmItem = styled.li`
    width: 240px;
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;
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

export const FilmItemTitle = styled.h3`
    padding: 5px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 400;
    line-height: 133%;

    color: #000;
`;

