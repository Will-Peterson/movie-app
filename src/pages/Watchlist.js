import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "../components/MovieCard";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Styles = styled.div`
  .movie-count {
    margin-left: 20px;
    color: #666;
  }

  .no-movies {
    font-size: 25px;
    color: #aaa;
    margin-top: 6.25rem;
    text-align: center;
  }

  button {
    display: block;
    margin: 0 auto;
    margin-top: 20px;
  }

  a {
    text-decoration: none;
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
            <>
            <div className="no-movies">You don't want to watch any movies?</div>
            <Link to='/'>
              <Button variant='success'>Search for movies</Button>
            </Link>
            </>
          )}
        </div>
      </div>
    </Styles>
  );
};
