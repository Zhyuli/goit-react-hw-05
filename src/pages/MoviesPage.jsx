import { useEffect, useState } from "react";
import { getByQuery } from "../api";
import { useSearchParams } from "react-router-dom";
import { PageTitle } from "../components/PageTitle";
import { SearchBar } from "../components/SearchBar";
import { MovieList } from "../components/MovieList/MovieList";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loader } from "../components/Loader";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);

  const [params, setParams] = useSearchParams();
  const searchedMovie = params.get("query") ?? "";

  const handleSubmit = (newQuery) => {
    params.set("query", newQuery);
    setParams(params);
    setMovies([]);
  };

  useEffect(() => {
    const controller = new AbortController();

    if (searchedMovie === "") {
      return;
    }

    async function fetchedMovies() {
      try {
        const fechedMovies = await getByQuery({
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
    fetchedMovies();
    return () => {
      controller.abort();
    };
  }, [searchedMovie]);

  return (
    <div>
      <PageTitle>Trending today</PageTitle>
      {load && <Loader />}
      {error && <ErrorMessage />}
      <SearchBar value={searchedMovie} onSearch={handleSubmit} />

      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
