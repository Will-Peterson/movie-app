import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import Button from 'react-bootstrap/Button';

export const MovieContainer = ({movie}) => {
    const {addMovieToWatchlist, addMovieToWatched, watchlist, watched} = useContext(GlobalContext);

    let storedMovie = watchlist.find(o => o.id === movie.id);
    let storedMovieWatched = watched.find(o => o.id === movie.id);

    const watchlistDisabled = storedMovie 
        ? true 
        : storedMovieWatched 
        ? true 
        : false;

        const watchedDisabled = storedMovieWatched ? true : false;

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                        {movie.poster_path ? (
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                            ) : (
                            <h3>no poster</h3>
                        )}
                    </div>
                </div>
            </div>
            <div>
                <h3>{movie.title}</h3>
                <h3>{movie.release_date 
                    ? movie.release_date.substring(0, 4)
                    : 'no date'}
                </h3>
            </div>
            <Button
                onClick={() => addMovieToWatchlist(movie)}
                disabled={watchlistDisabled}
            >Add to your Watchlist
            </Button>
            <Button
                onClick={() => addMovieToWatched(movie)}
                disabled={watchedDisabled}
            >Add to Watched
            </Button>
        </div>
    )
}
