import { useEffect, useState } from "react"
import { SearchForm } from "components/SearchForm";
import { searchFilmsByName } from "services/themoviedbApi";
import { Link, useSearchParams } from "react-router-dom";

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
         <ul>
            {
               films.map(({ id, title}) => (
                  <li key={id}>
                     <Link to={`${id}`} >{title}</Link>
                  </li>
               ))
            }
         </ul>}
      </>
         
   )
}