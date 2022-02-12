import { useEffect, useState } from "react"
import { SearchForm } from "components/SearchForm/SearchForm";
import { searchFilmsByName } from "services/themoviedbApi";
import { useSearchParams } from "react-router-dom";
import { MoviesPageTemplate } from "components/MoviesPageTemplate/MoviesPageTemplate";
import toast, { Toaster } from 'react-hot-toast';
import { BounceLoader } from "react-spinners";

export const MoviesPage = () => {
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [searchParams, setSearchParams] = useSearchParams();
   const [films, setFilms] = useState([]);

   useEffect(() => {

      const name = searchParams.get('query')
      if(!name){
         return;
      }
      setLoading(true);

     const searchFilms = async () => {
         try {
            const films = await searchFilmsByName(name);
            if (!films.results.length) {
            toast.error('No result, please input a new search value!');
            return;
            }
            setFilms(films.results);
         } catch (error) {
           setError(error.message);
        } finally {
           setLoading(false);
        }
        
     } 
     searchFilms();    
   },[searchParams]);

   const onSubmit = value => {
      if(!value){
         toast.error('Plese input search value!');
         return;
      }
      setSearchParams({query: value});
   }
   
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
         {loading && <BounceLoader color="#e24392"/>}
         {error && <h2>{error}</h2>}
         {films && 
         <MoviesPageTemplate films={films}/>}
      </>
         
   )
}