import styled from 'styled-components';

export const Section = styled.section`
  padding-bottom: 60px;  
`;

export const CastList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CastItem = styled.li`
    width: 240px;
    border-radius: 10px;
    overflow: hidden;
    background-color: #ec711f;
    transform: scale(1);
    transition: transform 250ms ease;
    :not(:last-child){
        margin-bottom: 30px;
    }
`;

export const ActorPoster = styled.img`
    position: relative;
    width: 290px;
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
