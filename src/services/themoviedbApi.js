import axios from "axios";
const API_KEY = 'acf3cca943ac5337a13eedff98e533f5';
const POPULAR_FILM_FETCH = '/trending/movie/day';
const SEARCH__MOVIE = '/search/movie';
const FILM = '/movie';
const FILM_CAST = '/credits';
const FILM_REVIEWS = '/reviews'

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getPopularFilms = async () => {
    const response = await axios.get(`${POPULAR_FILM_FETCH}?api_key=${API_KEY}`);
    return response.data;
}

export const searchFilmsByName = async (name) => {
    const response = await axios.get(`${SEARCH__MOVIE}?api_key=${API_KEY}&query=${name}`);
    return response.data;
}

export const getFilmDetailsById = async (id) => {
    const response = await axios.get(`${FILM}/${id}?api_key=${API_KEY}`);
    return response.data;
}

export const getFilmCastById = async (id) => {
    const response = await axios.get(`${FILM}/${id}/${FILM_CAST}?api_key=${API_KEY}`);
    return response.data;
}

export const getFilmReviewsById = async (id) => {
    const response = await axios.get(`${FILM}/${id}/${FILM_REVIEWS}?api_key=${API_KEY}`);
    return response.data;

}
