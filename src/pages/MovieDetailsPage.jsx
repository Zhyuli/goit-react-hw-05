import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../api";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchedData() {
      try {
        const fetchedMovie = await getMovieById(movieId);
        setMovie(fetchedMovie);
      } catch (error) {}
    }
    fetchedData();
  }, [movieId]);

  return (
    <div>
      <h1>{movie.original_title}</h1>
      {movie && (
        <div>
          <p>Overview: {movie.overview}</p>
        </div>
      )}
    </div>
  );
}
