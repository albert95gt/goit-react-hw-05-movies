import styled from 'styled-components';

export const Section = styled.section`
  text-align: center;
  padding-bottom: 60px;
`;

export const FilmList = styled.ul`
    margin-top: 20px;
    display: flex;
    align-items: center;
    @media screen and (max-width: 767px){
        flex-direction: column;
    }

    @media screen and (min-width: 768px){
        flex-wrap: wrap;
        justify-content: center;
        margin-top: -30px;
        margin-left: -30px;
    }
`;

export const FilmItem = styled.li`
    max-width: 240px;
    height: 360px;
    border-radius: 10px;
    overflow: overlay;
    background-color: #ec711f;
    transform: scale(1);
    transition: transform 250ms ease;

    :hover,
    :focus {
        transform: scale(1.1);
    }

    @media screen and (max-width: 767px){
        :not(:last-child){
            margin-bottom: 30px;
        }
    }
    
    @media screen and (min-width: 768px){
        flex-basis: calc((100% - 60px) / 2);
        margin-top: 30px;
        margin-left: 30px;
    }

    @media screen and (min-width: 1024px){
        flex-basis: calc((100% - 90px) / 3);
        margin-top: 30px;
        margin-left: 30px;
    }

    @media screen and (min-width: 1440px){
        flex-basis: calc((100% - 120px) / 4);
        margin-top: 30px;
        margin-left: 30px;
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
