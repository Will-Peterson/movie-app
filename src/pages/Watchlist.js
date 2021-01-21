import React, {useContext} from "react";
import {GlobalContext} from '../context/GlobalState';
import {MovieCard} from '../components/MovieCard';

export const Watchlist = () => {
  const {watchlist} = useContext(GlobalContext);

  return (
    <div>
      <h1>My Watchlist</h1>

      <span>{watchlist.length}{watchlist.length === 1 ? 'Movie' : 'Movies'}</span>

      {watchlist.length > 0 ? (
        <div>
        {watchlist.map((movie) => (
          <MovieCard movie={movie} type='watchlist' />
        ))}
        </div>
      ) : (
        <h2>no movies :(</h2>
      )}
    </div>
  );
};