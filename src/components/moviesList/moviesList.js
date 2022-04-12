import React, { useState, useEffect } from 'react';
import { MovieCard } from '../movieCard/movieCard';
import axios from 'axios';
import './moviesList.scss';

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
        return <MovieCard movie={movie} key={movie.id}></MovieCard>;
      })}
    </div>
  );
}
