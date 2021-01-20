import React from 'react'

export const MovieContainer = ({movie}) => {
    return (
        <div>
            <div>

            {movie.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                ) : (
                <h3>no poster</h3>
            )}
            </div>



            <div>
                <h3>{movie.title}</h3>
                <h3>{movie.release_date 
                    ? movie.release_date.substring(0, 4)
                    : 'no date'}
                </h3>
            </div>
            <button>Add to your Watchlist</button>
        </div>
    )
}
