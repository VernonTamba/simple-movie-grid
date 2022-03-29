import React, { useEffect, useState } from "react";
import "./MovieGrid.css";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import movieRequest from "./MovieRequest";
import Nav from "./Nav";
import { motion, AnimatePresence } from "framer-motion";

const MovieGrid = () => {
  const [movies, setMovies] = useState([{}]);
  const [currentUrl, setCurrentUrl] = useState(movieRequest.fetchNowPlaying);

  useEffect(() => {
    fetchMovies();
  }, [currentUrl]);

  // Fetch data
  const fetchMovies = async () => {
    const data = await fetch(`https://api.themoviedb.org/3${currentUrl}`);
    const moviesResults = await data.json();

    setMovies(moviesResults.results);
  };

  return (
    <div className="movieGrid">
      <Link className="movieGrid__title" to="/">
        Movie Grid
      </Link>
      <Nav currentUrl={currentUrl} setCurrentUrl={setCurrentUrl} />
      <motion.div layout className="movieGrid__grid">
        <AnimatePresence>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default MovieGrid;
