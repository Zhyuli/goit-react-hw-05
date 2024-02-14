export const CastItem = ({ name, profile_path, character }) => {
  const noProfileImg =
    "https://i.pinimg.com/564x/57/6b/d4/576bd4a1fe9a8a929fcecef41e4d394c.jpg";
  return (
    <div>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : noProfileImg
        }
        alt={name}
        width={200}
      />
      <p>actor: {name}</p>
      <p>character: {character}</p>
    </div>
  );
};
