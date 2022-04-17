import React, { useContext } from 'react';
import './movieCard.scss';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FavoriteMoviesContext } from '../../contexts/favoriteMovieContext';

export function MovieCard({ handleChecked, movie }) {
  const favoriteMoviesList = useContext(FavoriteMoviesContext);

  const isFavorite = favoriteMoviesList.includes(movie.id);

  const handleChange = () => {
    handleChecked(movie.id);
  };

  return (
    <div className='movie-card' key={movie.id}>
      <Link to={`movie/${movie.id}`} className='image'>
        <img src={movie.image_url} alt=''></img>
      </Link>
      <Link to={`movie/${movie.id}`} className='title'>
        {movie.title}
        <span>({movie.year})</span>
      </Link>
      <p className='genre'>Genre: {movie.genre}</p>
      <div className='checkbox'>
        <Checkbox onChange={handleChange} id={`${movie.id}`}></Checkbox>
      </div>
      <div className='rating'>
        <StarIcon style={{ color: '#ffc200' }} />
        <p>{movie.rating}/5</p>
      </div>
      <div className='favorite-icon'>
        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </div>
    </div>
  );
}
