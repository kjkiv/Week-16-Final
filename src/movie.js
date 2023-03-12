import React from "react";

function Movie({ movie }) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <img src={movie.imageUrl} alt={movie.title} />
    </div>
  );
}

export default Movie;

