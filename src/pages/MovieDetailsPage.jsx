import { useEffect, useState } from "react";
import { useParams, NavLink, Outlet, useLocation } from "react-router-dom";
import { getFilmDetailsById } from "services/themoviedbApi";
import { MovieDetailsTemplate } from "components/MovieDetailsTemplate";
import { BackBtn } from "components/BackBtn";
import { BounceLoader } from "react-spinners";

export const MovieDetailsPage = () => {
   const [loading, setLoading] = useState(false);
    const location = useLocation();
    const { movieId } = useParams();
    const [filmDetails, setFilmDetails] = useState(null);
    useEffect(() => {
        setLoading(true);
        const getFilmDetails = async () => {
            try {
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
            } catch (error) {
            alert(error.message);
            } finally {
            setLoading(false);
            }
            
        }
        getFilmDetails();
    }, [movieId]);
    
    return (
       <>
        <BackBtn />

        {filmDetails && <MovieDetailsTemplate movie={filmDetails}/>}
            {loading && <BounceLoader color="#e24392"/>}
            <hr />
            <p>Additional information</p>
            <nav>
                <NavLink to='cast' state={location.state}>Cast</NavLink> 
                <NavLink to='reviews' state={location.state}>Reviews</NavLink> 
            </nav>
            <hr />
            <Outlet/>
       </> 
    )
}