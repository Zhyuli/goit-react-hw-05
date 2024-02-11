import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        {/* <Route path="/movies/:movieId" element={<div>MovieDetailsPage</div>} />
        <Route
          path="/movies/:movieId/cast"
          element={<div>MovieDetailsPage</div>}
        />
        <Route path="/movies/:movieId/cast" element={<div>MovieCast</div>} /> */}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
