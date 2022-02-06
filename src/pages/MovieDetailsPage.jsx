import { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink, Outlet } from "react-router-dom";
import { getFilmDetailsById } from "services/themoviedbApi";

const SEARCH_IMG_URL = "https://image.tmdb.org/t/p/w500";

export const MovieDetailsPage = () => {
    const navigate = useNavigate()
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
        <button type="button" onClick={()=> navigate(-1)}>Go back</button>
        {filmDetails && <article>
                <img src={`${SEARCH_IMG_URL}${filmDetails.poster_path}`} alt="" />
                <h2>{filmDetails.title} ({filmDetails.release_date.slice(0, 4)})</h2>
                    <p>User score: {filmDetails.vote_average}</p>
                <h3>Overview</h3>
                    <p>{filmDetails.overview}</p>
                <h4>Genres</h4>
                    <p>{filmDetails.genres.map(data => data.name).join(', ')}</p>
            </article>}
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