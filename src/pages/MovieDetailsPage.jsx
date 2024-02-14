import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { getMovieById } from "../api";
import { Loader } from "../components/Loader/Loader";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";
import { MovieDetails } from "../components/MovieDetails/MovieDetails";
import { PageTitle } from "../components/PageTitle/PageTitle";
import { BackToHome } from "../components/BackToHome/BackToHome";

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
      <div>
        <PageTitle>Movie details</PageTitle>
        <BackToHome>Back to home page</BackToHome>

        {load && <Loader />}
        {error && <ErrorMessage />}

        {movie && <MovieDetails movie={movie} />}
      </div>
      <div>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </div>
  );
}
