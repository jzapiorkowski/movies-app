import React, { createContext, useState } from 'react';

export const FavoriteMoviesContext = createContext();
export const UpdateFavoriteMoviesContext = createContext();

export function FavoriteMovieProvider(props) {
  const [favoriteMovies, setfavoriteMovies] = useState([]);

  const updateFavoriteMovies = (movieId) => {
    if (favoriteMovies.includes(movieId)) {
      const tmp = favoriteMovies.filter((id) => {
        return movieId !== id ? movieId : null;
      });
      setfavoriteMovies(tmp);
    } else {
      setfavoriteMovies([...favoriteMovies, movieId]);
    }
  };

  return (
    <FavoriteMoviesContext.Provider value={favoriteMovies}>
      <UpdateFavoriteMoviesContext.Provider value={updateFavoriteMovies}>
        {props.children}
      </UpdateFavoriteMoviesContext.Provider>
    </FavoriteMoviesContext.Provider>
  );
}
