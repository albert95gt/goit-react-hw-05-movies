import { useEffect, useState } from "react";
import { getFilmReviewsById } from "services/themoviedbApi";
import { useParams } from "react-router-dom";

export const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getFilmReviews = async () => {
            const response = await getFilmReviewsById(movieId);
            const { results } = response;
            setReviews(results);
        }
        getFilmReviews();
    }, [movieId]);
    
    return (
        <>
            {reviews.length > 0 ? 
            (<ul>
                {reviews.map(({id, author, content}) => (
                    <li key={id}>
                        <h3>Author: {author}</h3>
                        <p>{content}</p>
                    </li>
                ))}
            </ul>)
            :
            (<p>We dont have any reviews for this movie.</p>)    
            }
        </>
        
    )
};