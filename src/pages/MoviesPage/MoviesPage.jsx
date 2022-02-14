import { useEffect, useState } from "react"
import { SearchForm } from "components/SearchForm/SearchForm";
import { searchFilmsByName } from "services/themoviedbApi";
import { useSearchParams } from "react-router-dom";
import { MoviesPageTemplate } from "components/MoviesPageTemplate/MoviesPageTemplate";
import toast, { Toaster } from 'react-hot-toast';
import { Spinner } from "components/Loader/Loader";
import { Main } from "components/Main/Main.styled";

export const MoviesPage = () => {
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [searchParams, setSearchParams] = useSearchParams();
   const [films, setFilms] = useState(null);

   useEffect(() => {

      const name = searchParams.get('query')
      if(!name){
         return;
      }
      setLoading(true);

     const searchFilms = async () => {
         try {
            const response = await searchFilmsByName(name);
            if (!response.results.length) {
            toast.error('No result, please input a new search value!');
            return;
            }
            const detectedFilms = response.results.map(({ id, title, poster_path, release_date })=> ({ id, title, poster_path, release_date }))
            setFilms(detectedFilms);
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
      <Main>
         <Toaster position="top-right" toastOptions={{
            style: {
               background: '#e45b5b',
               padding: '16px',
               color: '#e9e9e9',
            },
         }}/>
         <SearchForm onSubmit={onSubmit}/>
         {loading && <Spinner color="#ec711f"/>}
         {error && <h2>{error}</h2>}
         {films && 
         <MoviesPageTemplate films={films}/>}
      </Main>
         
   )
}