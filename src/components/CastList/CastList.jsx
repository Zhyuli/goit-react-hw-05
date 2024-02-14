import { CastItem } from "../CastItem/CastItem";

export const CastList = ({ cast }) => {
  return (
    <ul className="list">
      {cast &&
        cast.map((item) => (
          <li key={item.id} className="{css.item}">
            <CastItem
              name={item.name}
              profile_path={item.profile_path}
              character={item.character}
            />
          </li>
        ))}
    </ul>
  );
};
