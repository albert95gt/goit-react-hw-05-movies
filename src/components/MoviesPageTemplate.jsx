import { Link } from "react-router-dom";

export const MoviesPageTemplate = ({ films })=> {
    return (
        <ul>
            {
               films.map(({ id, title}) => (
                  <li key={id}>
                     <Link to={`${id}`} >{title}</Link>
                  </li>
               ))
            }
         </ul>
    )
}