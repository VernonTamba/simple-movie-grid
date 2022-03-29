import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from "./Movie";
import MovieGrid from "./MovieGrid";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" exact element={<Movie />} />
          <Route path="/contents" exact element={<MovieGrid />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
