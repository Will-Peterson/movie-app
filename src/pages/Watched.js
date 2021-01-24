import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "../components/MovieCard";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

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

export const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <Styles>
      <div className="container-fluid">
        <h1>Movies I've Watched</h1>
        <div className="movie-count">
          {watched.length}
          {watched.length === 1 ? " Movie" : " Movies"}
          <hr />
        </div>
        <div className="row justify-content-center">
          {watched.length > 0 ? (
            <>
              {watched.map((movie) => (
                <MovieCard movie={movie} type="watched" />
              ))}
            </>
          ) : (
            <>
            <div className="no-movies">You have not watched any movies?</div>
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
