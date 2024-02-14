export const ReviewItem = ({ review: { author, content } }) => {
  return (
    <div>
      <p>{author}</p>
      <p>{content}</p>
    </div>
  );
};
