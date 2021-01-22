import React from "react";
import { MovieControls } from "./MovieControls";
import Image from 'react-bootstrap/Image';

export const MovieCard = ({ movie, type }) => {
  return (
    <div
      className="m-3"
    >
      {movie.poster_path ? (
        <Image
          rounded
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
      ) : (
        <div style={{background:'-webkit-gradient(linear,left top,left bottom,from(#666),to(#ccc)',borderRadius:'.25rem',textAlign:'center',width:'200px',height:'300px',fontSize:'20px',fontWeight:'bold',lineHeight:'300px'}}>No Poster Available</div>
      )}
      <MovieControls type={type} movie={movie} />
    </div>
  );
};
