import { ReviewItem } from "./ReviewItem";

export const ReviewList = ({ reviews }) => {
  return (
    <ul>
      {reviews &&
        reviews.map((review) => (
          <li key={review.id}>
            <ReviewItem review={review} />
          </li>
        ))}
    </ul>
  );
};
