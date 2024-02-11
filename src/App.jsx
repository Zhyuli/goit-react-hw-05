import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<div>Home page</div>} />
        <Route path="/movies" element={<div>MoviesPage</div>} />
        <Route path="/movies/:movieId" element={<div>MovieDetailsPage</div>} />
        <Route
          path="/movies/:movieId/cast"
          element={<div>MovieDetailsPage</div>}
        />
        <Route path="/movies/:movieId/cast" element={<div>MovieCast</div>} />
        <Route path="/" element={<div>Home page</div>} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
