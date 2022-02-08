import { useEffect, useState } from "react"
import { SearchForm } from "components/SearchForm";
import { searchFilmsByName } from "services/themoviedbApi";
import { useSearchParams } from "react-router-dom";
import { MoviesPageTemplate } from "components/MoviesPageTemplate";

export const MoviesPage = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const [films, setFilms] = useState([]);
   const onSubmit = value => {
      setSearchParams({query: value});
   }
   useEffect(() => {
      const name = searchParams.get('query')
      if(!name){
         return;
      }
     const searchFilms = async () => {
        const films = await searchFilmsByName(name);
        setFilms(films.results);
     } 
     searchFilms();    
   },[searchParams]);
   
   return (
      <>
         <SearchForm onSubmit={onSubmit}/>
         {films && 
         <MoviesPageTemplate films={films}/>}
      </>
         
   )
}