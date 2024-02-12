import axios from "axios";

const API_KEY = "b3069c2e92ce05da0ce90578bcdb5f0a";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export const getMovies = async ({ abortController }) => {
  const options = {
    params: {
      api_key: API_KEY,
      language: "en-US",
      page: 1,
    },
    signal: abortController.signal,
  };
  const response = await axios.get("trending/movie/day", options);

  return response.data.results;
};

export const getMovieById = async (movieId) => {
  const options = {
    params: {
      api_key: API_KEY,
    },
  };
  const response = await axios.get(`movie/${movieId}`, options);

  return response.data;
};
