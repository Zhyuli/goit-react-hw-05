import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../api";
import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMassage";
import { MovieDetails } from "../components/MovieDetails";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    async function fetchedData() {
      try {
        setLoad(true);
        setError(false);
        const fetchedMovie = await getMovieById(movieId);
        setMovie(fetchedMovie);
      } catch (error) {
        setError(true);
      } finally {
        setLoad(false);
      }
    }
    fetchedData();
  }, [movieId]);

  return (
    <div>
      <h1>{movie.original_title}</h1>
      {load && <Loader />}
      {error && <ErrorMessage />}

      {movie && <MovieDetails movie={movie} />}
    </div>
  );
}
