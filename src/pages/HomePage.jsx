import { getPopularFilms } from "services/themoviedbApi";
import { useState, useEffect } from "react";
import { Link, } from "react-router-dom";

export const HomePage = () => {
   
   const [films, setFilms] = useState([]);
   useEffect(() => {
    const getFilms = async () => {
      try {
         const popularFilms = await getPopularFilms();
         setFilms(popularFilms.results);
      } catch (error) {
         
      }
    }
    getFilms();
   }, []);
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