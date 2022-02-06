import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, MoviesPage, MovieDetailsPage, Cast, Reviews } from 'pages';
import { Layout } from './Layout';

export const App = () => {
  return (
  
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />}/>
          <Route path='movies' element={<MoviesPage />}/>
          <Route path='movies/:movieId' element={<MovieDetailsPage/>}>
              <Route path='cast' element={<Cast/>}/>
              <Route path='reviews' element={<Reviews />}/>
          </Route>
          
          <Route path="*" element={<Navigate to="/"/>} />
        </Route>
      </Routes>
  );
};
