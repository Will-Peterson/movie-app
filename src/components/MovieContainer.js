import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

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
        <div style={{}} className=''>
            {movie.poster_path ? (
                <Image 
                    rounded
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                ) : (
                    <h3>no poster</h3>
                    )}
            <div className='' style={{fontSize:'20px',fontWeight:'bold',textAlign:'left'}}>
                {movie.title}
            </div>
            <div style={{textAlign:'left'}}>{movie.release_date
                ? movie.release_date.substring(0, 4)
                : 'no date'}
            </div>
            <Button
                onClick={() => addMovieToWatchlist(movie)}
                disabled={watchlistDisabled}
                style={{float:'left'}}
                variant='dark'
                size='sm'
                >Add to Watchlist
            </Button>
            <Button
                onClick={() => addMovieToWatched(movie)}
                disabled={watchedDisabled}
                style={{float:'right'}}
                variant='dark'
                size='sm'
                >Add to Watched
            </Button>
        </div>
    )
}
