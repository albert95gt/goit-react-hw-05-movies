import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilmCastById } from "services/themoviedbApi";
import { MovieCastTemplate } from "components/MovieCastTemplate";

export const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);
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
            {cast && <MovieCastTemplate cast={cast}/>}
        </>
    )
        
    
    
} 