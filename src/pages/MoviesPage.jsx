import { useEffect, useState } from "react";
import axios from "axios";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/157336?api_key=b3069c2e92ce05da0ce90578bcdb5f0a"
        );
        setMovies(response.data);
      } catch (error) {}
    }
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h3>Movie list</h3>

      {movies.length > 0 && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <p>Title: {movie.original_title}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
