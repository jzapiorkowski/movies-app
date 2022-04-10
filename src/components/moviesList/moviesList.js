import React, { useState, useEffect } from 'react';
import { MovieCard } from '../movieCard/movieCard';
import axios from 'axios';

export function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/movies').then((movies) => {
      setMovies(movies.data);
    });
  }, []);

  return (
    <div className='movies-list'>
      {movies.map((movie) => {
        return <MovieCard movie={movie}></MovieCard>;
      })}
    </div>
  );
}
