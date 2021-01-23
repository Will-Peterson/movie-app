import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Button from 'react-bootstrap/Button';

export const MovieControls = ({ movie, type }) => {
  const {
    addMovieToWatched,
    removeMovieFromWatchlist,
    removeMovieFromWatched,
    moveMovieToWatchlistFromWatched
  } = useContext(GlobalContext);

  return (
    <div>
      {type === "watchlist" && (
        <>
          <Button 
            onClick={() => addMovieToWatched(movie)}
            variant='dark'
            size='sm'
            className='mt-2'
          >
            Add to Watched
          </Button>
          <Button 
            onClick={() => removeMovieFromWatchlist(movie.id)}
            variant='dark'
            size='sm'
            className='mt-2 float-right'
            >
            Remove
          </Button>
        </>
      )}
      {type === "watched" && (
        <>
          <Button 
            onClick={() => moveMovieToWatchlistFromWatched(movie)}
            variant='dark'
            size='sm'
            className='mt-2'
            >
            Add to Watchlist
          </Button>
          <Button 
            onClick={() => removeMovieFromWatched(movie.id)}
            variant='dark'
            size='sm'
            className='mt-2 float-right'
          >Remove
          </Button>
        </>
      )}
    </div>
  );
};
