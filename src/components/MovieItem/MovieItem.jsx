import css from "./MovieItem.module.css";

export const MovieItem = ({ movie: { title } }) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};
