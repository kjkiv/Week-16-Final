import React, { useState } from "react";
import { movies } from "./data";
import Movie from "./Movie";

const MovieList = () => {
  const [movieList, setMovieList] = useState(movies);

  const handleAddMovie = () => {
    const newMovie = {
      title: "New Movie",
      year: "Year",
      poster:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png",
      description: "No description available.",
    };
    setMovieList([...movieList, newMovie]);
  };

  return (
    <div>
      <button onClick={handleAddMovie}>Add Movie</button>
      {movieList.map((movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;

