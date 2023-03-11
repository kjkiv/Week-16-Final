import React from "react";

function MovieItem(props) {
  const { title, rating } = props;

  return (
    <div className="movie-item">
      <h2>{title}</h2>
      <p>Rating: {rating}</p>
    </div>
  );
}

export default MovieItem;
