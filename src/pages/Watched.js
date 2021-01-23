import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "../components/MovieCard";
import styled from 'styled-components';

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

export const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <Styles>
      <div className='container-fluid'>
        <h1>Movies I've Watched</h1>
        <div className='movie-count'>
          {watched.length}
          {watched.length === 1 ? " Movie" : " Movies"}
          <hr />
        </div>
        <div className='row justify-content-center'>
          {watched.length > 0 ? (
            <>
              {watched.map((movie) => (
                <MovieCard movie={movie} type="watched" />
                ))}
            </>
          ) : (
            <div className='no-movies'>Add movies to your watched list</div>
            )}
        </div>
      </div>
    </Styles>
  );
};
