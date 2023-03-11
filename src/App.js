import React, { useState } from 'react';
import MovieList from './MovieList';
import MovieForm from './MovieForm';
import './app.css';

function App() {
  const [movies, setMovies] = useState([
    { title: 'The Shawshank Redemption', poster: 'shawshank.jpg', description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.' },
    { title: 'The Godfather', poster: 'godfather.jpg', description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.' },
    { title: 'The Dark Knight', poster: 'darkknight.jpg', description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.' }
  ]);

  const addMovie = (title, poster, description) => {
    const newMovie = { title: title, poster: poster, description: description };
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <h1>My Movie List</h1>
      <MovieList movies={movies} />
      <MovieForm addMovie={addMovie} />
    </div>
  );
}

export default App;
