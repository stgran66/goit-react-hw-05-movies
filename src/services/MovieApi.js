import axios from 'axios';
const BaseURL = 'https://api.themoviedb.org/3';
const API_KEY = '583f93eb1f9f03306dbe56dd02574154';

export const getTrendingMovies = async () => {
  const trendingDaily = '/trending/movie/day';
  const request = BaseURL + trendingDaily + `?api_key=${API_KEY}`;
  const response = await axios.get(request);
  return response.data.results;
};

export const getMovieByQuery = async query => {
  const request = BaseURL + `/search/movie?api_key=${API_KEY}&query=${query}`;
  const response = await axios.get(request);
  return response.data.results;
};

export const getMovieByID = async id => {
  const request = BaseURL + `/movie/${id}?api_key=${API_KEY}`;
  const response = await axios.get(request);
  return response.data;
};

export const getMovieCast = async id => {
  const request = BaseURL + `/movie/${id}/credits?api_key=${API_KEY}`;
  const response = await axios.get(request);
  return response;
};
