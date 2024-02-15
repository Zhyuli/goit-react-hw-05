import css from "../ReviewItem/ReviewItem.module.css";

export const ReviewItem = ({ review: { author, content } }) => {
  return (
    <div className={css.box}>
      <p className={css.author}>{author}</p>
      <p className={css.content}>{content}</p>
    </div>
  );
};
