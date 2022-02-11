import { SEARCH_IMG_URL } from "constance";
import { useLocation, NavLink } from "react-router-dom";
 export const MovieDetailsTemplate = ({movie}) => {
    const location = useLocation();

    const { poster_path, title, release_date, vote_average, overview, genres } = movie;
    const releaseYear = release_date.slice(0, 4);
    const filmGenres = genres.map(data => data.name).join(', ');
    return (
        <>
            <article>
                <img src={`${SEARCH_IMG_URL}${poster_path}`} alt="" />
                <h2>{title} ({releaseYear})</h2>
                    <p>User score: {vote_average}</p>
                <h3>Overview</h3>
                    <p>{overview}</p>
                <h4>Genres</h4>
                    <p>{filmGenres}</p>
            </article>

            <hr />

            <p>Additional information</p>
            
            <nav>
                <NavLink to='cast' state={location.state}>Cast</NavLink> 
                <NavLink to='reviews' state={location.state}>Reviews</NavLink> 
            </nav>
            
            <hr />
        </>
        
    )
}