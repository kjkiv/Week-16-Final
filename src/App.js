// App.js
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([
    { title: "The Shawshank Redemption", rating: 9.3 },
    { title: "The Godfather", rating: 9.2 },
    { title: "The Godfather: Part II", rating: 9.0 },
    { title: "The Dark Knight", rating: 9.0 },
  ]);

  const addMovie = () => {
    setMovies([
      ...movies,
      { title: "New Movie", rating: Math.floor(Math.random() * 10) + 1 },
    ]);
  };

  return (
    <div className="App">
      <NavBar onAddMovie={addMovie} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;

