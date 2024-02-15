import css from "../CastItem/CastItem.module.css";

export const CastItem = ({ name, profile_path, character }) => {
  const noProfileImg =
    "https://i.pinimg.com/564x/57/6b/d4/576bd4a1fe9a8a929fcecef41e4d394c.jpg";
  return (
    <div className={css.box}>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : noProfileImg
        }
        alt={name}
        width={200}
        className={css.img}
      />
      <p className={css.name}>actor: {name}</p>
      <p className={css.character}>character: {character}</p>
    </div>
  );
};
