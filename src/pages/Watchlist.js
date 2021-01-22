import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "../components/MovieCard";

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="container-fluid">
      <h1>Movies I Want to Watch</h1>
      <span style={{marginLeft: '20px'}}>
        {watchlist.length}
        {watchlist.length === 1 ? " Movie" : " Movies"}
        <hr />
      </span>
      <div className="row justify-content-center">
        {watchlist.length > 0 ? (
          <>
            {watchlist.map((movie) => (
              <MovieCard movie={movie} type="watchlist" />
            ))}
          </>
        ) : (
          <div style={{fontSize:'25px',color:'#aaa',marginTop:'60px'}}>Add movies to your watchlist</div>
        )}
      </div>
    </div>
  );
};
