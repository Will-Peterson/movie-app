import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "../components/MovieCard";

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="container-fluid">
      <h1>My Watchlist</h1>
      <span>
        {watchlist.length}
        {watchlist.length === 1 ? "Movie" : "Movies"}
      </span>
      <div className="row justify-content-center">
        {watchlist.length > 0 ? (
          <>
            {watchlist.map((movie) => (
              <MovieCard movie={movie} type="watchlist" />
            ))}
          </>
        ) : (
          <h2>no movies :(</h2>
        )}
      </div>
    </div>
  );
};
