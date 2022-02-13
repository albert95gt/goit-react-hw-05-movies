import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const Article = styled.article`

  @media screen and (min-width: 768px){
    display: flex;
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const DescContainer = styled.div`
  @media screen and (min-width: 768px){
    margin-left: 20px;  
  }
`;


export const Img = styled.img`
 
  width: 300px;
  height: 400px;
  
  @media screen and (max-width: 767px){
    margin-bottom: 20px;  
  }
  
`;

export const DefaultImg = styled.img`
  width: 300px;
  height: 400px;
  margin-bottom: 20px; 
`;

export const MovieTitle = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  line-height: 1.15;
  margin-bottom: 10px;
  color: #fff;
`;

export const Score = styled.h3`
  font-size: 18px;
  line-height: 1.25;
  color: #fff;
  margin-bottom: 10px;
`;

export const ScoreValue = styled.span`
  color: #ec711f;
  margin-left: 5px;
`;

export const Overview = styled.h3`
  font-size: 18px;
  line-height: 1.25;
  color: #fff;
`;

export const OverviewDescr = styled.p`
  font-size: 16px;
  color: #ec711f;
  margin-bottom: 10px;
`
export const Genres = styled.h3`
  font-size: 18px;
  line-height: 1.25;
  color: #fff;

`;

export const GenresDescr = styled.p`
  font-size: 16px;
  color: #ec711f;
  margin-bottom: 10px;

`
export const MoreInformation = styled.h3`
  font-size: 18px;
  line-height: 1.25;
  color: #fff;
  margin-bottom: 10px;
`

export const Link = styled(NavLink)`
  width: 32px;
  height: 32px;
  background-color: #ec711f;
  border-radius: 5px;
  color: #fff;
  padding: 5px;
  transition: background-color 250ms ease;

  :hover, 
  :focus {
    background-color: #fa6705;
  }

  &.active{
    background: #e94c0e;
  }
  :not(:last-child){
    margin-right: 10px;
  }
`


