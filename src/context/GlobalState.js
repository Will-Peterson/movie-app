import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  watchlist: localStorage.getItem("wp-ma-vau-watchlist")
    ? JSON.parse(localStorage.getItem("wp-ma-vau-watchlist"))
    : [],
  watched: localStorage.getItem("wp-ma-vau-watched")
    ? JSON.parse(localStorage.getItem("wp-ma-vau-watched"))
    : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem(
      "wp-ma-vau-watchlist",
      JSON.stringify(state.watchlist)
    );
    localStorage.setItem("wp-ma-vau-watched", JSON.stringify(state.watched));
  }, [state]);

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };
  const removeMovieFromWatched = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHED", payload: id });
  };
  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };
  const moveMovieToWatchlistFromWatched = (movie) => {
    dispatch({ type: "MOVE_MOVIE_TO_WATCHLIST_FROM_WATCHED", payload: movie });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatched,
        addMovieToWatchlist,
        removeMovieFromWatched,
        removeMovieFromWatchlist,
        moveMovieToWatchlistFromWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
