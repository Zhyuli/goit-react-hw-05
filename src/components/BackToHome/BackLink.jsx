import { Link } from "react-router-dom";
import css from "../BackToHome/BackToHome.module.css";

export const BackLink = ({ href, children }) => {
  return (
    <div className={css.box}>
      <Link to={href} className={css.link}>
        {children}
      </Link>
    </div>
  );
};
