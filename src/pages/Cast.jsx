import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilmCastById } from "services/themoviedbApi";

const SEARCH_IMG_URL = "https://image.tmdb.org/t/p/w500";

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
        <ul>
            
            {cast && cast.map(({ id, profile_path, name, character}) => (
                <li key={id}>
                {profile_path && <img src={`${SEARCH_IMG_URL}/${profile_path}`} alt={name} />}
                <p>Name: {name}</p>
                <p>Character: {character}</p>
                </li>
            ))}
        </ul>
    )
    
} 