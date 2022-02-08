import { useEffect, useState } from "react";
import { getFilmReviewsById } from "services/themoviedbApi";
import { useParams } from "react-router-dom";
import { MovieReviewTemplate } from "components/MovieRewiewTemplate";

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
            <MovieReviewTemplate reviews={reviews}/>
            :
            <p>We dont have any reviews for this movie.</p>    
            }
        </>
        
    )
};