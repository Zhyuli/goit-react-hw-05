import { useEffect, useState } from "react";
import { getMovies } from "../api";
import { Link } from "react-router-dom";
import { PageTitle } from "../components/PageTitle";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchTrendingMovies() {
      try {
        const fechedMovies = await getMovies({
          abortController: controller,
        });
        setMovies(fechedMovies);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(true);
        }
      }
    }
    fetchTrendingMovies();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <PageTitle>Trending today</PageTitle>
      {error && <p>ERROR</p>}

      {movies.length > 0 && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
              {/* <Link to={`/movies/${movie.id}`}>MovieDetails</Link> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
