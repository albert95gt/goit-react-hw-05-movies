import { useEffect, useState } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import { getFilmDetailsById } from "services/themoviedbApi";
import { MovieDetailsTemplate } from "components/MovieDetailsTemplate";


export const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [filmDetails, setFilmDetails] = useState(null);
    useEffect(() => {
        
        const getFilmDetails = async () => {
            const response = await getFilmDetailsById(movieId);
            const {
                id,
                title,
                release_date,
                vote_average,
                poster_path,
                overview,
                genres,} = response;
            setFilmDetails({ id, title, release_date, vote_average, poster_path, overview, genres, });
        }
        getFilmDetails();
    }, [movieId]);
    
    return (
       <>
        {filmDetails && <MovieDetailsTemplate movie={filmDetails}/>}
            <hr />
            <p>Additional information</p>
            <nav>
                <NavLink to='cast'>Cast</NavLink> 
                <NavLink to='reviews'>Reviews</NavLink> 
            </nav>
            <hr />
            <Outlet/>
       </> 
    )
}