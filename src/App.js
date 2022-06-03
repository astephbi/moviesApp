import React from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  async function fetchMoviesHandler() {
    const res = await fetch("https://swapi.dev/api/films");
    const data = await res.json;
    const transformMovies = data.results?.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_craw,
        releaseDate: movieData.release_date,
      };
    });
    setMovies(transformMovies);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Avoir les films</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
