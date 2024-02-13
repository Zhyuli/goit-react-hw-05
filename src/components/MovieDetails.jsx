export const MovieDetails = ({
  movie: { original_title, poster_path, overview, vote_average, genres },
}) => {
  const noImgAvailable =
    "https://images.unsplash.com/photo-1640127249305-793865c2efe1?q=80&w=2206&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : noImgAvailable
        }
        alt={original_title}
      />
      <div>
        <h3>{original_title}</h3>
        <p>
          Overview : <span>{overview}</span>
        </p>
        <p>
          Vote_average : <span>{vote_average}</span>
        </p>
        <ul>
          <p>Genres :</p>
          {genres &&
            genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
        </ul>
      </div>
    </div>
  );
};
