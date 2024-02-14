import { useState, useEffect } from "react";
import { PageTitle } from "../components/PageTitle";
import { MovieList } from "../components/MovieList/MovieList";
import { getMovies } from "../api";
import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchTrendingMovies() {
      try {
        setLoad(true);
        setError(false);
        const fechedMovies = await getMovies({
          abortController: controller,
        });
        setMovies(fechedMovies);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(true);
        }
      } finally {
        setLoad(false);
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
      {load && <Loader />}
      {error && <ErrorMessage />}

      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
