import { Link } from "react-router-dom";

export const BackToHome = ({ children }) => {
  return (
    <div>
      <Link to="/">{children}</Link>
    </div>
  );
};
