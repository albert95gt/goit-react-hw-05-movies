import styled from 'styled-components';

export const Section = styled.section`
  padding-bottom: 60px;  
`;

export const CastList = styled.ul`
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

export const CastItem = styled.li`
    max-width: 220px;
    border-radius: 10px;
    overflow: hidden;
    background-color: #ec711f;
    transform: scale(1);
    transition: transform 250ms ease;

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

export const ActorPoster = styled.img`
    position: relative;
    width: 220px;
    height: 320px;
    object-fit: fill;
`;

export const DefaultImg = styled.img`
    position: relative;
    width: 290px;
    height: 320px;
    object-fit: fill;
`;

export const ActorDescr = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  text-align: center;
  background-color:#313131ca;  
  color: #fff;   
`;
