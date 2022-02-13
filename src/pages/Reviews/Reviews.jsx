import { Section, ReviewList, Author, AuthorName, AuthorComment } from "./Reviews.styled";
import { Wrapper } from "components/Wrapper/Wrapper.styled";

export const Reviews = ({reviews}) => {
   return (
       <Section>
           <Wrapper>
                <ReviewList>
                    {reviews.map(({id, author, content}) => (
                        <li key={id}>
                            <Author>Author: <AuthorName>{author}</AuthorName></Author>
                            <AuthorComment>{content}</AuthorComment>
                        </li>
                    ))}
                </ReviewList>
           </Wrapper>
       </Section>
       
   )
}



