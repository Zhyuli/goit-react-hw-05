import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h1>Not found page</h1>
      <Link to="/">Go back</Link>
    </div>
  );
}
