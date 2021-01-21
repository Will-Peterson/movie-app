import React from 'react';
import {MovieControls} from './MovieControls';

export const MovieCard = ({movie, type}) => {
    return (
        <div>
            {movie.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                ) : (
                <h3>no poster</h3>
            )}
            <MovieControls type={type} movie={movie}/>
        </div>
    );
}