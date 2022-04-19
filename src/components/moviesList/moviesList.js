import React, { useState, useEffect } from 'react';
import { MovieCard } from '../movieCard/movieCard';
import { moviesClient } from '../../api/moviesClient';
import './moviesList.scss';
import { Outlet } from 'react-router-dom';

export function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [moviesToDelete, setMoviesToDelete] = useState([]);
  const [sortType, setSortType] = useState();
  const [moviesFound, setMoviesFound] = useState([]);
  const [yearRange, setYearRange] = useState([1000, new Date().getFullYear()]);

  useEffect(() => {
    moviesClient.get('/movies').then((movies) => {
      setMovies(movies.data);
      setMoviesFound(movies.data.reverse());
    });
  }, []);

  useEffect(() => {
    let tmp = [];

    switch (sortType) {
      case 'titleASC':
        tmp = movies.sort((a, b) =>
          a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
        );
        break;

      case 'titleDESC':
        tmp = movies.sort((a, b) =>
          a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1
        );
        break;

      case 'ratingASC':
        tmp = movies.sort((a, b) => (a.rating < b.rating ? 1 : -1));
        break;

      case 'ratingDESC':
        tmp = movies.sort((a, b) => (a.rating > b.rating ? 1 : -1));
        break;

      case 'newest':
        tmp = movies.sort((a, b) => (a.year < b.year ? 1 : -1));
        break;

      case 'oldest':
        tmp = movies.sort((a, b) => (a.year > b.year ? 1 : -1));
        break;

      default:
        tmp = movies.reverse();
        break;
    }

    setMoviesFound([...tmp]);
  }, [sortType]);

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

  const onSortChange = (event) => {
    setSortType(event.target.value);
  };

  const handleYearChange = (year, side) => {
    if (side === 'min') {
      setYearRange([year, yearRange[1]]);
    } else if (side === 'max') {
      setYearRange([yearRange[0], year]);
    }
  };

  return (
    <main>
      <fieldset>
        <select className='sort-type' onChange={onSortChange}>
          <option selected disabled>
            Choose sort type
          </option>
          <option value='titleASC'>A-Z</option>
          <option value='titleDESC'>Z-A</option>
          <option value='ratingASC'>Highest Rating</option>
          <option value='ratingDESC'>Lowest Rating</option>
          <option value='newest'>Newest release year</option>
          <option value='oldest'>Oldest release year</option>
        </select>
        <input
          defaultValue={yearRange[0]}
          type='number'
          min={1000}
          max={new Date().getFullYear() - 1}
          onChange={(event) => handleYearChange(event.target.value, 'min')}
        ></input>
        <input
          defaultValue={yearRange[1]}
          type='number'
          min={1001}
          max={new Date().getFullYear()}
          onChange={(event) => handleYearChange(event.target.value, 'max')}
        ></input>
        <div onClick={handleDelete}>Delete chosen movies</div>
      </fieldset>
      <div className='movies-list'>
        {moviesFound.map((movie) => {
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
