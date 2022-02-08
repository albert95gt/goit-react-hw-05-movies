import { getPopularFilms } from "services/themoviedbApi";
import { useState, useEffect } from "react";
import { HomePageTemplate } from "components/HomePageTemplate";

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
      <HomePageTemplate films={films}/>
   )
}