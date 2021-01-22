import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

export const MovieContainer = ({movie}) => {
    const {addMovieToWatchlist, addMovieToWatched, watchlist, watched} = useContext(GlobalContext);

    let storedMovie = watchlist.find(obj => obj.id === movie.id);
    let storedMovieWatched = watched.find(obj => obj.id === movie.id);

    const watchlistDisabled = storedMovie 
        ? true 
        : storedMovieWatched 
        ? true 
        : false;

        const watchedDisabled = storedMovieWatched ? true : false;

    return (
        <div>
            {movie.poster_path ? (
                <Image 
                    rounded
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                ) : (
                    <div style={{background:'-webkit-gradient(linear,left top,left bottom,from(#666),to(#ccc)',borderRadius:'.25rem',width:'300px',height:'450px',fontSize:'30px',fontWeight:'bold',lineHeight:'450px'}}>No Poster Available</div>
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
                style={{float:'left',position:'relative',bottom:0,left:0}}
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
                className='mb-5'
                >Add to Watched
            </Button>
        </div>
    )
}
