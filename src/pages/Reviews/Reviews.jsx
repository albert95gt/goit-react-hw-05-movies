import { Section, Author, ReviewItem, AuthorName, AuthorComment } from "./Reviews.styled";
import { Wrapper } from "components/Wrapper/Wrapper.styled";
import PropTypes from 'prop-types';

export const Reviews = ({reviews}) => {
   return (
       <Section>
           <Wrapper>
                <ul>
                    {reviews.map(({id, author, content}) => (
                        <ReviewItem key={id}>
                            <Author>Author: <AuthorName>{author}</AuthorName></Author>
                            <AuthorComment>{content}</AuthorComment>
                        </ReviewItem>
                    ))}
                </ul>
           </Wrapper>
       </Section>
       
   )
}

Reviews.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }).isRequired)
}


