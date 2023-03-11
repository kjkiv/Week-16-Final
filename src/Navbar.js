// NavBar.js
import React from "react";

function NavBar(props) {
  const { onAddMovie } = props;

  return (
    <nav>
      <h1>My Movie List</h1>
      <button onClick={onAddMovie}>Add Movie</button>
    </nav>
  );
}

export default NavBar;

