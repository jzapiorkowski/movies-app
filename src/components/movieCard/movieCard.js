import React, { useContext } from 'react';
import './movieCard.scss';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  FavoriteMoviesContext,
  UpdateFavoriteMoviesContext,
} from '../../contexts/favoriteMovieContext';
import noMovieImage from '../../assets/images/noMovieImage.jpg';

export function MovieCard({ handleChecked, movie }) {
  const favoriteMoviesList = useContext(FavoriteMoviesContext);
  const updateFavoriteMoviesContext = useContext(UpdateFavoriteMoviesContext);

  const isFavorite = favoriteMoviesList.includes(movie.id);

  const handleChange = () => {
    handleChecked(movie.id);
  };

  return (
    <div className='movie-card' key={movie.id}>
      <Link to={`movie/${movie.id}`} className='image'>
        <img
          src={movie.image_url ? movie.image_url : noMovieImage}
          alt=''
        ></img>
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
        <p>{Math.round(movie.rating)}/5</p>
      </div>
      <div className='favorite-icon'>
        {isFavorite ? (
          <FavoriteIcon onClick={() => updateFavoriteMoviesContext(movie.id)} />
        ) : (
          <FavoriteBorderIcon
            onClick={() => updateFavoriteMoviesContext(movie.id)}
          />
        )}
      </div>
    </div>
  );
}
