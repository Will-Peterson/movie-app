import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "../components/MovieCard";
import styled from "styled-components";

const Styles = styled.div`
  .movie-count {
    margin-left: 20px;
    color: #666;
  }

  .no-movies {
    font-size: 25px;
    color: #aaa;
    margin-top: 60px;
  }
`;

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <Styles>
      <div className="container-fluid">
        <h1>Movies I Want to Watch</h1>
        <div className="movie-count">
          {watchlist.length}
          {watchlist.length === 1 ? " Movie" : " Movies"}
        </div>
        <hr />
        <div className="row justify-content-center">
          {watchlist.length > 0 ? (
            <>
              {watchlist.map((movie) => (
                <MovieCard movie={movie} type="watchlist" />
              ))}
            </>
          ) : (
            <div className="no-movies">Add movies to your watchlist</div>
          )}
        </div>
      </div>
    </Styles>
  );
};
