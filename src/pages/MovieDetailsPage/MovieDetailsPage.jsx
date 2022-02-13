import { useEffect, useState, Suspense } from "react";
import { createChunk } from "helpers/createChunk";
import { useParams, Routes, Route } from "react-router-dom";
import { getFilmDetailsById } from "services/themoviedbApi";
import { MovieDetailsTemplate } from "components/MovieDetailsTemplate/MovieDetailsTemplate";
import { BounceLoader, DotLoader } from "react-spinners";
import { ErrorMessage } from "components/ErrorMessage/ErrorMessage";
import { Main } from "components/Main/Main.styled";

const Cast = createChunk('Cast');
const Reviews = createChunk('Reviews');

export const MovieDetailsPage = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { movieId } = useParams();
    const [filmDetails, setFilmDetails] = useState(null);
    const [cast, setCast] = useState([]);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        setLoading(true);
        const getFilmDetails = async () => {
            try {
                const response = await getFilmDetailsById(movieId);
                const {
                    id,
                    title,
                    release_date,
                    vote_average,
                    poster_path,
                    overview,
                    genres,
                    credits:{ cast },
                    reviews:{ results},
                } = response;
                setFilmDetails({ id, title, release_date, vote_average, poster_path, overview, genres });
                setCast(cast);
                setReviews(results)
            } catch (error) {
                setError(error.message);
            } finally {
            setLoading(false);
            }
            
        }
        getFilmDetails();
    }, [movieId]);
    
    return (
       <Main>
        {error && <h2>{error}</h2>}
        {loading && <BounceLoader color="#e24392"/>}
        {filmDetails && <MovieDetailsTemplate movie={filmDetails}/>}

        <Suspense fallback={<DotLoader color="#e24392"/>}>
            <Routes>
                <Route path="cast" element={cast.length ?<Cast cast={cast}/> : <ErrorMessage value={'cast information'}/>}/>
                <Route path="reviews" element={reviews.length ?<Reviews reviews={reviews}/> : <ErrorMessage value={'reviews'}/>}/>
            </Routes> 
        </Suspense>
        
       </Main> 
    )
}