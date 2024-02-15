import { CastItem } from "../CastItem/CastItem";
import css from "../CastList/CastList.module.css";

export const CastList = ({ cast }) => {
  return (
    <ul className={css.list}>
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
