import React, { useState } from "react";
import {MovieContainer} from './MovieContainer';

const api = {
  key: process.env.REACT_APP_MOVIE_API_KEY,
};

export const Movies = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const queryHandler = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${api.key}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={queryHandler}
        />
      </div>
      <div>
        {results.length > 0 && (
          <ul>
            {results.map((movie) => (
              <li key={movie.id}>
                  <MovieContainer movie={movie} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
