import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../api";
import { Loader } from "../Loader";
import { ErrorMessage } from "../ErrorMessage";
import { ReviewList } from "../ReviewList/ReviewList";

export const ReviewsSubpage = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchedData() {
      try {
        setLoad(true);
        setError(false);
        const fetchedReviews = await getReviews(movieId, {
          abortController: controller,
        });

        setReviews(fetchedReviews.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoad(false);
      }
    }
    fetchedData();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <div>
      {load && <Loader />}
      {error && <ErrorMessage />}
      {reviews.length > 0 ? (
        <ReviewList reviews={reviews} />
      ) : (
        <p>Sorry, movie does not have any reviews.</p>
      )}
    </div>
  );
};
