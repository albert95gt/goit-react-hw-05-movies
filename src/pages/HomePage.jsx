import { getPopularFilms } from "services/themoviedbApi";
import { useState, useEffect } from "react";
import { HomePageTemplate } from "components/HomePageTemplate/HomePageTemplate";
import { BounceLoader } from "react-spinners";

export const HomePage = () => {
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [films, setFilms] = useState([]);
   useEffect(() => {
    setLoading(true);  
    const getFilms = async () => {
      try {
         const popularFilms = await getPopularFilms();
         setFilms(popularFilms.results);
      } catch (error) {
         setError(error.message);
      } finally {
         setLoading(false);  
      }
    }
    getFilms();
   }, []);
   return (
      <> 
         {error && <h2>{error}</h2>}
         <HomePageTemplate films={films}/>
         {loading && <BounceLoader color="#e24392"/>}
      </>
   )
}