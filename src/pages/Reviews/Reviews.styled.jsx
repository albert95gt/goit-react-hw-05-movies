import styled from 'styled-components';

export const Section = styled.section`
    padding-bottom: 60px;
`

export const ReviewItem = styled.li`
    :not(:last-child){
        margin-bottom: 10px;
    }
`;

export const Author = styled.h4`
    font-size: 18px;
    color: #fff;
`;

export const AuthorName = styled.span`
    font-size: 18px;
    color: #ec711f;
`

export const AuthorComment = styled.p`
    font-size: 16px;
    color: #c0c0c0;
`