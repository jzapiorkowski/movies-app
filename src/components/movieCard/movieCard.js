import React from 'react';
import './movieCard.scss';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';

export function MovieCard({ handleChecked, movie }) {
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
    </div>
  );
}
