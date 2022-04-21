import React, { useState, useEffect, useReducer, useContext } from 'react';
import { MovieCard } from '../movieCard/movieCard';
import { moviesClient } from '../../api/moviesClient';
import './moviesList.scss';
import { Outlet } from 'react-router-dom';
import { FavoriteMoviesContext } from '../../contexts/favoriteMovieContext';
import { FilterPanel } from '../filterPanel/filterPanel';
import Pagination from '@mui/material/Pagination';

export function MoviesList() {
  const FavoriteMoviesList = useContext(FavoriteMoviesContext);
  const [movies, setMovies] = useState([]);
  const [moviesToDelete, setMoviesToDelete] = useState([]);
  const [sortType, setSortType] = useState();
  const [moviesFound, setMoviesFound] = useState([]);
  const [yearRange, setYearRange] = useState([1000, new Date().getFullYear()]);
  const [ratingRange, setRatingRange] = useState([1, 5]);
  const [onlyFavoriteMovies, setOnlyFavoriteMovies] = useReducer(
    (prevState) => !prevState,
    false
  );
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    moviesClient.get('/movies').then((movies) => {
      setMovies(movies.data);
      setMoviesFound(movies.data.reverse());
    });
  }, []);

  useEffect(() => {
    switch (sortType) {
      case 'titleASC':
        setMovies(
          [...movies].sort((a, b) =>
            a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
          )
        );
        setMoviesFound(
          [...moviesFound].sort((a, b) =>
            a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
          )
        );
        break;

      case 'titleDESC':
        setMovies(
          [...movies].sort((a, b) =>
            a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1
          )
        );
        setMoviesFound(
          [...moviesFound].sort((a, b) =>
            a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1
          )
        );
        break;

      case 'ratingASC':
        setMovies([...movies].sort((a, b) => (a.rating < b.rating ? 1 : -1)));
        setMoviesFound(
          [...moviesFound].sort((a, b) => (a.rating < b.rating ? 1 : -1))
        );
        break;

      case 'ratingDESC':
        setMovies([...movies].sort((a, b) => (a.rating > b.rating ? 1 : -1)));
        setMoviesFound(
          [...moviesFound].sort((a, b) => (a.rating > b.rating ? 1 : -1))
        );
        break;

      case 'newest':
        setMovies([...movies].sort((a, b) => (a.year < b.year ? 1 : -1)));
        setMoviesFound(
          [...moviesFound].sort((a, b) => (a.year < b.year ? 1 : -1))
        );
        break;

      case 'oldest':
        setMovies([...movies].sort((a, b) => (a.year > b.year ? 1 : -1)));
        setMoviesFound(
          [...moviesFound].sort((a, b) => (a.year > b.year ? 1 : -1))
        );
        break;

      default:
        setMovies([...movies].reverse());
        break;
    }
  }, [sortType]);

  useEffect(() => {
    applyFilters();
  }, [yearRange, ratingRange, onlyFavoriteMovies]);

  function applyFilters() {
    let tmp = movies;

    tmp = tmp.filter((movie) => {
      return movie.year >= yearRange[0] && movie.year <= yearRange[1];
    });

    tmp = tmp.filter((movie) => {
      return movie.rating >= ratingRange[0] && movie.rating <= ratingRange[1];
    });

    if (onlyFavoriteMovies) {
      tmp = tmp.filter((movie) => {
        return FavoriteMoviesList.includes(movie.id);
      });
    }

    setMoviesFound([...tmp]);
  }

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
    if (side === 'slider') {
      setYearRange(year);
    } else if (side === 'min') {
      setYearRange([Number(year), yearRange[1]]);
    } else if (side === 'max') {
      setYearRange([yearRange[0], Number(year)]);
    }
  };

  const handleRatingFilterChange = (rating, side) => {
    if (side === 'slider') {
      setRatingRange(rating);
    } else if (side === 'min') {
      setRatingRange([Number(rating), ratingRange[1]]);
    } else if (side === 'max') {
      setRatingRange([ratingRange[0], Number(rating)]);
    }
  };

  const handlePageChange = (e, p) => {
    setCurrentPage(p);
  };

  const indexOfLastMovie = currentPage * 12;
  const indexOfFirstMovie = indexOfLastMovie - 12;
  const currentMovies = moviesFound.slice(indexOfFirstMovie, indexOfLastMovie);

  return (
    <main>
      <FilterPanel
        onSortChange={onSortChange}
        yearRange={yearRange}
        handleYearChange={handleYearChange}
        ratingRange={ratingRange}
        handleRatingFilterChange={handleRatingFilterChange}
        setOnlyFavoriteMovies={setOnlyFavoriteMovies}
        handleDelete={handleDelete}
      ></FilterPanel>
      <div className='movies-list'>
        {currentMovies.map((movie) => {
          return (
            <MovieCard
              movie={movie}
              key={movie.id}
              handleChecked={handleChecked}
            ></MovieCard>
          );
        })}
      </div>
      <Pagination
        count={Math.ceil(moviesFound.length / 12)}
        variant='outlined'
        shape='rounded'
        className='pagination'
        page={currentPage}
        onChange={handlePageChange}
        size='large'
      />
      <Outlet />
    </main>
  );
}
