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
    <div className='container'>
      <div class='input-group mb-5 mt-5'>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={queryHandler}
          aria-describedby="inputGroup-sizing-sm"
          class="form-control"
        />  
      </div>
      {results.length > 0 && (
        <div style={{textAlign:'center'}} className='row justify-content-center'>
            {results.map((movie) => (
              <div style={{border:'1px solid black',maxWidth:'320px'}} className='mx-3 mb-4' key={movie.id}>
                <MovieContainer movie={movie} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
