import { getPopularFilms } from "services/themoviedbApi";
import { useState, useEffect } from "react";
import { HomePageTemplate } from "components/HomePageTemplate/HomePageTemplate";
import { Spinner } from "components/Loader/Loader";
import { Main } from "components/Main/Main.styled";

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
      <Main> 
         {error && <h2>{error}</h2>}
         <HomePageTemplate films={films}/>
         {loading && <Spinner color="#ec711f" />}
      </Main>
   )
}