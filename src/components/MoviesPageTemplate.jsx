import { Link, useLocation } from "react-router-dom";
import { SEARCH_IMG_URL } from "constance";

export const MoviesPageTemplate = ({ films })=> {
   const location = useLocation();
       return (
        <ul>
            {
               films.map(({ id, title, poster_path }) => (
                  <li key={id}>
                     <Link to={`${id}`} state={{from: location}}>
                        <img src={`${SEARCH_IMG_URL}/${poster_path}`} alt={title} />
                        <h2>{title}</h2>
                     </Link>
                  </li>
               ))
            }
         </ul>
    )
}