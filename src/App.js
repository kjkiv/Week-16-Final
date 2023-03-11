import React, { useState } from "react";
import "./App.css";
import movies from "./data";

function App() {
  const [movieData, setMovieData] = useState(movies);
  const [titleInput, setTitleInput] = useState("");
  const [posterInput, setPosterInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMovie = {
      title: titleInput,
      poster: posterInput,
      description: descriptionInput,
    };
    setMovieData([...movieData, newMovie]);
    setTitleInput("");
    setPosterInput("");
    setDescriptionInput("");
  };

  return (
    <div className="App">
      <h1>Movie List</h1>
      <div className="movie-form">
        <h2>Add a Movie</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={titleInput}
            onChange={(event) => setTitleInput(event.target.value)}
          />
          <label htmlFor="poster">Poster URL:</label>
          <input
            type="text"
            id="poster"
            value={posterInput}
            onChange={(event) => setPosterInput(event.target.value)}
          />
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={descriptionInput}
            onChange={(event) => setDescriptionInput(event.target.value)}
          />
          <button type="submit">Add Movie</button>
        </form>
      </div>
      <div className="movie-list">
        {movieData.map((movie, index) => (
          <div key={index} className="movie">
            <img src={movie.poster} alt={movie.title} />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

