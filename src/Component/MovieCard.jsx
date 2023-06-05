import React from "react";
import "./MovieCardStyles.css";
const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <h1 className="movieYear">{movie.Year}</h1>

      <div>
        <div>
          <img
            className="poster"
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/400"
            }
            alt={movie.Title}
          />
        </div>
      </div>
      <div className="movieDetail">
        <span>{movie.Type}</span>
        <h2>{movie.Title}</h2>
      </div>
    </div>
  );
};
export default MovieCard;
