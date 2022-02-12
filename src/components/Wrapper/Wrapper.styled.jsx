import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  
  @media screen and (min-width: 768px){
      width: 620px;
      padding-left: 15px;
      padding-right: 15px;
  }
  
  @media screen and (min-width: 1024px){
    width: 880px;
    padding-left: 30px;
    padding-right: 30px;
  }
`;