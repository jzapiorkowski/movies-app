import React, { useState } from 'react';
import { MovieCard } from '../movieCard/movieCard';

export function MoviesList() {
  const [movies, setMovies] = useState([]);
  return (
    <div className='movies-list'>
      {movies.map((movie) => {
        return <MovieCard movie={movie}></MovieCard>;
      })}
    </div>
  );
}
