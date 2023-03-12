

import React, { useState } from "react";
import Movie from "./Movie";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      imageUrl: "https://picsum.photos/id/1018/200/300",
    },
    {
      id: 2,
      title: "The Godfather",
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      imageUrl: "https://picsum.photos/id/1015/200/300",
    },
    {
      id: 3,
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      imageUrl: "https://picsum.photos/id/1021/200/300",
    },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newMovie = {
      id: Date.now(),
      title,
      description,
      imageUrl,
    };

    setMovies([...movies, newMovie]);

    setTitle("");
    setDescription("");
    setImageUrl("");
  };

  return (
    <div>
      <h1>Movie List</h1>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
      <form onSubmit={handleSubmit}>
        <h2>Add a Movie</h2>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={handleDescriptionChange} />
        </label>
        <label>
          Image URL:
          <input type="text" value={imageUrl} onChange={handleImageUrlChange} />
        </label>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default App;


