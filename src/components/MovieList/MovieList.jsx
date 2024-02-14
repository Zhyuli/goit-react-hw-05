import { Link, useLocation } from "react-router-dom";
import { MovieItem } from "../MovieItem/MovieItem";
import css from "../MovieList/MovieList.module.css";

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.item}>
          <Link to={`/movies/${movie.id}`} state={location}>
            <MovieItem movie={movie} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
