import { useEffect, useState } from "react"
import { SearchForm } from "components/SearchForm";
import { searchFilmsByName } from "services/themoviedbApi";
import { useSearchParams } from "react-router-dom";
import { MoviesPageTemplate } from "components/MoviesPageTemplate";
import toast, { Toaster } from 'react-hot-toast';

export const MoviesPage = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const [films, setFilms] = useState([]);
   const onSubmit = value => {
      if(!value){
         toast.error('Plese input search value!');
         return;
      }
      setSearchParams({query: value});
   }
   useEffect(() => {
      const name = searchParams.get('query')
      if(!name){
         return;
      }
     const searchFilms = async () => {
        const films = await searchFilmsByName(name);
        if (!films.results.length) {
         toast.error('No result, please input a new search value!');
         return;
        }
        setFilms(films.results);
     } 
     searchFilms();    
   },[searchParams]);
   
   return (
      <>
         <Toaster toastOptions={{
            style: {
               background: '#e45b5b',
               padding: '16px',
               color: '#e9e9e9',
            },
         }}/>
         <SearchForm onSubmit={onSubmit}/>
         {films && 
         <MoviesPageTemplate films={films}/>}
      </>
         
   )
}