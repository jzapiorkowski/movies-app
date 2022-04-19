import React, { useState, useEffect } from 'react';
import { MovieCard } from '../movieCard/movieCard';
import { moviesClient } from '../../api/moviesClient';
import './moviesList.scss';
import { Outlet } from 'react-router-dom';

export function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [moviesToDelete, setMoviesToDelete] = useState([]);

  useEffect(() => {
    moviesClient.get('/movies').then((movies) => {
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

  const handleDelete = () => {
    moviesToDelete.forEach((id) => {
      moviesClient.delete(`/movie/${id}`);
    });
  };

  return (
    <main>
      <fieldset>
        <select className='sort-type'>
          <option value='alphabetASC'>A-Z</option>
          <option value='alphabetDESC'>Z-A</option>
          <option value='ratingASC'>Highest Rating</option>
          <option value='ratingDESC'>Lowest Rating</option>
          <option value='newest'>Newest</option>
          <option value='oldest'>Oldest</option>
        </select>
        <div onClick={handleDelete}>Delete chosen movies</div>
      </fieldset>
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
      <Outlet />
    </main>
  );
}
