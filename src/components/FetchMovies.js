import React, { useState } from "react";
import { MovieContainer } from "./MovieContainer";

const api = {
  key: process.env.REACT_APP_MOVIE_API_KEY,
};

export const FetchMovies = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const queryHandler = e => {
    e.preventDefault();
    setIsLoading(true);
    setQuery(e.target.value);
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api.key}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
      .then(res => res.json())
      .then(data => setResults(data.results));
    setIsLoading(false);
  }

  return (
    <div className="container">
      <div className="input-group mb-5 mt-5">
        <input
          type="text"
          autoFocus
          placeholder="Search for movies..."
          value={query}
          onChange={queryHandler}
          aria-describedby="inputGroup-sizing-sm"
          className="form-control"
        />
      </div>
      {isLoading && <div>Movies loading...</div>}
      {results.length > 0 &&
        <div className="row justify-content-center text-center">
          {results.map((movie) => (
            <div style={{ maxWidth: "320px" }} className="mx-3" key={movie.id}>
              <MovieContainer movie={movie} />
            </div>
          ))}
        </div>}
    </div>
  );
};
