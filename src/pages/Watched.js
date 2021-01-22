import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "../components/MovieCard";

export const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <div className='container-fluid'>
      <h1>Watched</h1>
      <span>
        {watched.length}
        {watched.length === 1 ? "Movie" : "Movies"}
      </span>
      <div className='row justify-content-center'>
        {watched.length > 0 ? (
          <>
            {watched.map((movie) => (
              <MovieCard movie={movie} type="watched" />
            ))}
          </>
        ) : (
          <h2>you have not watched any movies</h2>
        )}
      </div>
    </div>
    );
};
