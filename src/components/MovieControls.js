import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Button from 'react-bootstrap/Button';

export const MovieControls = ({ movie, type }) => {
  const {
    addMovieToWatchlist,
    addMovieToWatched,
    removeMovieFromWatchlist,
    removeFromWatched
  } = useContext(GlobalContext);

  return (
    <div>
      {type === "watchlist" && (
        <>
          <Button onClick={() => addMovieToWatched(movie)}>
            add to watched
          </Button>
          <Button onClick={() => removeMovieFromWatchlist(movie.id)}>
            remove
          </Button>
        </>
      )}
      {type === "watched" && (
        <>
          <Button onClick={() => addMovieToWatchlist(movie)}>
            move to watchlist
          </Button>
          <Button onClick={() => removeFromWatched(movie.id)}>remove</Button>
        </>
      )}
    </div>
  );
};
