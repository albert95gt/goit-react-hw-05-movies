import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout';

const createChunk = componentName => {
  return lazy(() =>
    import(`../pages/${componentName}`).then(module => ({
      default: module[componentName],
    }))
  );
};

const HomePage = createChunk('HomePage');
const MoviesPage = createChunk('MoviesPage');
const MovieDetailsPage = createChunk('MovieDetailsPage');
const Cast = createChunk('Cast');
const Reviews = createChunk('Reviews');

export const App = () => {
  return (
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
      
  );
};
