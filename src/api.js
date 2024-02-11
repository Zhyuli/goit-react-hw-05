// https://api.themoviedb.org/3/trending/movie/day?api_key=b3069c2e92ce05da0ce90578bcdb5f0a;
import axios from "axios";

const API_KEY = "b3069c2e92ce05da0ce90578bcdb5f0a";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export const fetchData = async (query) => {
  const url = `search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

  const options = {
    params: {
      api_key: API_KEY,
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error("This didn't work.");
    throw error;
  }
};
