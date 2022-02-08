import { Link, } from "react-router-dom";

export const HomePageTemplate = ({ films }) => {
    return (
        <>
            <h2>Trending today</h2>
            <ul>
            {films.map(({ id, title })=> (
                <li key={id}>
                    <Link to={`movies/${id}`}>{title}</Link>
                </li>
            ))}
            </ul>
        </>
    )
}