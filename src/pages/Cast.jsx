import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilmCastById } from "services/themoviedbApi";
import { MovieCastTemplate } from "components/MovieCastTemplate";

export const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    useEffect(() => {
        const getFilmCast = async () => {
            const response = await getFilmCastById(movieId);
            const { cast } = response;
            setCast(cast);
        }
        getFilmCast();
    }, [movieId]);

    return (
        <>
            {cast.length ? 
            <MovieCastTemplate cast={cast}/>
            :
            <p>We dont have any cast information for this movie.</p>    
            }
        </>
    )
        
    
    
} 