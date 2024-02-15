import css from "../PageTitle/PageTitle.module.css";
export const PageTitle = ({ children }) => {
  return <h1 className={css.title}>{children}</h1>;
};
