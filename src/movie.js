import React from "react";

const Movie = ({ movie }) => {
  return (
    <div>
      <img src={movie.poster} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.year}</p>
      <p>{movie.description}</p>
    </div>
  );
};

export default Movie;
