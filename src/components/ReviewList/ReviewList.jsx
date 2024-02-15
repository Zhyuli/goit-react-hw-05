import css from "../ReviewList/ReviewList.module.css";
import { ReviewItem } from "../ReviewItem/ReviewItem";

export const ReviewList = ({ reviews }) => {
  return (
    <div className={css.box}>
      <ul className={css.list}>
        {reviews &&
          reviews.map((review) => (
            <li key={review.id} className={css.item}>
              <ReviewItem review={review} />
            </li>
          ))}
      </ul>
    </div>
  );
};
