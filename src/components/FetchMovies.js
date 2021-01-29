import React, { useState, useEffect } from "react";
import { MovieContainer } from "./MovieContainer";

const api = {
  key: process.env.REACT_APP_MOVIE_API_KEY,
};

export const FetchMovies = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(async () => {
      const getData = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api.key}&language=en-US&page=1&include_adult=false&query=${setQuery}`);
      const res = await getData.json();
      setResults(res.results)
  }, [setQuery]);

  return (
    <div className="container">
      <div className="input-group mb-5 mt-5">
        <input
          type="text"
          autoFocus
          placeholder="Search for movies..."
          value={query}
          onChange={e => setQuery(() => e.target.value)}
          aria-describedby="inputGroup-sizing-sm"
          className="form-control"
        />
      </div>
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
