import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {MovieCard} from '../components/MovieCard';

export const Watched = () => {
    const {watched} = useContext(GlobalContext);

    return (
        <div>
            <h1>Watched</h1>
            <span>{watched.length}{watched.length === 1 ? 'Movie' : 'Movies'}</span>
            <div>
                {watched.length > 0 ? (
                    <div>
                        {watched.map((movie) => (
                            <MovieCard movie={movie} type='watched' />
                        ))}
                    </div>
                ) : (
                    <h2>you have not watched any movies</h2>
                )}
            </div>
        </div>
    );
}