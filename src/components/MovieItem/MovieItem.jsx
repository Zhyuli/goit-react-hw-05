import css from "./MovieItem.module.css";

export const MovieItem = ({ movie: { title } }) => {
  return (
    <div className={css.box}>
      <p className={css.title}>{title}</p>
    </div>
  );
};
