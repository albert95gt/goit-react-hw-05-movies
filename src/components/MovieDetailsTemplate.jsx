import { SEARCH_IMG_URL } from "constance";
 export const MovieDetailsTemplate = ({movie}) => {
    const { poster_path, title, release_date, vote_average, overview, genres } = movie;
    const releaseYear = release_date.slice(0, 4);
    const filmGenres = genres.map(data => data.name).join(', ');
    return (
        <article>
                <img src={`${SEARCH_IMG_URL}${poster_path}`} alt="" />
                <h2>{title} ({releaseYear})</h2>
                    <p>User score: {vote_average}</p>
                <h3>Overview</h3>
                    <p>{overview}</p>
                <h4>Genres</h4>
                    <p>{filmGenres}</p>
        </article>
    )
}