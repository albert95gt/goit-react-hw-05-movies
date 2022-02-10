import { getPopularFilms } from "services/themoviedbApi";
import { useState, useEffect } from "react";
import { HomePageTemplate } from "components/HomePageTemplate";
import { BounceLoader } from "react-spinners";

export const HomePage = () => {
   const [loading, setLoading] = useState(false);
   const [films, setFilms] = useState([]);
   useEffect(() => {
    setLoading(true);  
    const getFilms = async () => {
      try {
         const popularFilms = await getPopularFilms();
         setFilms(popularFilms.results);
      } catch (error) {
         alert(error.message);
      } finally {
    setLoading(false);  
      }
    }
    getFilms();
   }, []);
   return (
      <>
         <HomePageTemplate films={films}/>
         {loading && <BounceLoader color="#e24392"/>}
      </>
   )
}