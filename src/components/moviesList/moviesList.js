import React, { useState, useEffect } from 'react';
import { MovieCard } from '../movieCard/movieCard';
import axios from 'axios';
import './moviesList.scss';

export function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [moviesToDelete, setMoviesToDelete] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/movies').then((movies) => {
      setMovies(movies.data);
    });
  }, []);

  const handleChecked = (movieId) => {
    setMoviesToDelete(() => {
      if (moviesToDelete.includes(movieId)) {
        return moviesToDelete.filter((index) => index !== movieId);
      } else {
        return [...moviesToDelete, movieId];
      }
    });
  };

  return (
    <div className='movies-list'>
      {movies.map((movie) => {
        return (
          <MovieCard
            movie={movie}
            key={movie.id}
            handleChecked={handleChecked}
          ></MovieCard>
        );
      })}
    </div>
  );
}
