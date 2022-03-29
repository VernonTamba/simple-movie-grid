import React, { useEffect, useState } from "react";
import "./Movie.css";
import movieRequest from "./MovieRequest";
import { Link } from "react-router-dom";

const Movie = () => {
  const [movies, setMovies] = useState([{}]);
  const [currentUrl, setCurrentUrl] = useState(movieRequest.fetchNowPlaying);

  useEffect(() => {
    fetchMovies();
  }, []);

  // Fetch data
  const fetchMovies = async () => {
    const data = await fetch(`https://api.themoviedb.org/3${currentUrl}`);
    const moviesResults = await data.json();

    setMovies(moviesResults.results);
  };

  return (
    <div className="movie">
      <div className="movie__description">
        <h1>Movie Grid!</h1>
        <p>
          “The whole of life is just like watching a film. Only it's as though
          you always get in ten minutes after the big picture has started, and
          no-one will tell you the plot, so you have to work it out all yourself
          from the clues.”
        </p>
        <p>Terry Pratchett, Moving Pictures</p>
        <Link className="movie__link" to="/contents">
          See Movies
        </Link>
      </div>
      <div className="movie__grid">
        {/* <img
          src={`https://image.tmdb.org/t/p/w500${
            movies[Math.floor(Math.random() * movies.length)].poster_path
          }`}
          alt={movies.title}
        />
        <img
          src={`https://image.tmdb.org/t/p/w500${
            movies[Math.floor(Math.random() * movies.length)].poster_path
          }`}
          alt={movies.title}
        />
        <img
          src={`https://image.tmdb.org/t/p/w500${
            movies[Math.floor(Math.random() * movies.length)].poster_path
          }`}
          alt={movies.title}
        />
        <img
          src={`https://image.tmdb.org/t/p/w500${
            movies[Math.floor(Math.random() * movies.length)].poster_path
          }`}
          alt={movies.title}
        /> */}
        {movies.map((movie, index) => {
          while (index < 4) {
            let randomNumber = Math.floor(Math.random() * movies.length);
            return (
              <img
                key={index}
                src={`https://image.tmdb.org/t/p/w500${movies[randomNumber].poster_path}`}
                alt={movies[randomNumber].title}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Movie;
