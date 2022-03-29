import React from "react";
import "./MovieCard.css";
import GradeIcon from "@mui/icons-material/Grade";
import { motion } from "framer-motion";

const MovieCard = ({ movie }) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className="movieCard"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movieCard__description">
        <GradeIcon className="movieCard__ratingIcon" />
        <h1>{movie.vote_average}</h1>
      </div>
    </motion.div>
  );
};

export default MovieCard;
