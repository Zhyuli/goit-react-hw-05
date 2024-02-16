import css from "../MovieDetails/MovieDetails.module.css";
import clsx from "clsx";
import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "../Loader/Loader";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const MovieDetails = ({
  movie: { original_title, poster_path, overview, vote_average, genres },
}) => {
  const noImgAvailable =
    "https://images.unsplash.com/photo-1640127249305-793865c2efe1?q=80&w=2206&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className={css.box}>
      <div className={css.infoBox}>
        <div className={css.imgBox}>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : noImgAvailable
            }
            alt={original_title}
            className={css.img}
          />
        </div>

        <div className={css.content}>
          <h3 className={css.title}>{original_title}</h3>
          <p className={css.text}>
            <span className={css.span}>Overview: </span>
            {overview}
          </p>
          <p className={css.text}>
            <span className={css.span}>Vote average: </span>
            {vote_average}
          </p>
          <ul className={css.genreList}>
            <p className={css.text}>
              {" "}
              <span className={css.span}> Genres: </span>
            </p>
            {genres &&
              genres.map((genre) => (
                <li key={genre.id} className={css.item}>
                  {genre.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className={css.links}>
        <NavLink to="cast" className={buildLinkClass}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={buildLinkClass}>
          Reviews
        </NavLink>
      </div>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
