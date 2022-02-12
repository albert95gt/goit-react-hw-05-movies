import { Suspense } from 'react';
import { createChunk } from 'helpers/createChunk';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../Layout/Layout';



const HomePage = createChunk('HomePage');
const MoviesPage = createChunk('MoviesPage');
const MovieDetailsPage = createChunk('MovieDetailsPage');

export const App = () => {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage />}/>
            <Route path='movies' element={<MoviesPage />}/>
            <Route path='movies/:movieId/*' element={<MovieDetailsPage/>}>
            </Route>
            
            <Route path="*" element={<Navigate to="/"/>} />
          </Route>
        </Routes>
      </Suspense>
      
  );
};
