import { Suspense, useEffect, useRef, useState } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { getMovieById } from "../api";
import { Loader } from "../components/Loader/Loader";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";
import { MovieDetails } from "../components/MovieDetails/MovieDetails";
import { PageTitle } from "../components/PageTitle/PageTitle";
import { BackLink } from "../components/BackLink/BackLink";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location.state);

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
        <BackLink href={backLinkRef.current ?? "/"}>Go back</BackLink>
        {load && <Loader />}
        {error && <ErrorMessage />}

        {movie && <MovieDetails movie={movie} />}
      </div>
    </div>
  );
}
