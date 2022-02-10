import { Link, useLocation } from "react-router-dom";
import { SEARCH_IMG_URL } from "constance";
export const HomePageTemplate = ({ films }) => {
    const location = useLocation();
    return (
        <>
            <h2>Trending today</h2>
            <ul>
            {films.map(({ id, title, poster_path })=> (
                <li key={id}>
                    <Link to={`movies/${id}`} state={{from: location}}>
                        <img src={`${SEARCH_IMG_URL}/${poster_path}`} alt={title} />
                        <h2>{title}</h2>
                    </Link>
                </li>
            ))}
            </ul>
        </>
    )
}