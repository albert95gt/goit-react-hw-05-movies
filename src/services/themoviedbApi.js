import axios from 'axios';
import {
  API_KEY,
  POPULAR_FILM_FETCH,
  SEARCH__MOVIE,
  FILM,
  FILM_CAST,
  FILM_REVIEWS,
} from '../constance';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getPopularFilms = async () => {
  const response = await axios.get(`${POPULAR_FILM_FETCH}?api_key=${API_KEY}`);
  return response.data;
};

export const searchFilmsByName = async name => {
  const response = await axios.get(
    `${SEARCH__MOVIE}?api_key=${API_KEY}&query=${name}`
  );
  return response.data;
};

export const getFilmDetailsById = async id => {
  const response = await axios.get(`${FILM}/${id}?api_key=${API_KEY}`);
  return response.data;
};

export const getFilmCastById = async id => {
  const response = await axios.get(
    `${FILM}/${id}/${FILM_CAST}?api_key=${API_KEY}`
  );
  return response.data;
};

export const getFilmReviewsById = async id => {
  const response = await axios.get(
    `${FILM}/${id}/${FILM_REVIEWS}?api_key=${API_KEY}`
  );
  return response.data;
};
