import React from 'react';
import './movieCard.scss';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';

export function MovieCard({ handleChecked, movie }) {
  const handleChange = () => {
    handleChecked(movie.id);
  };

  return (
    <div className='movie-card' key={movie.id}>
      <Link to={`movie/${movie.id}`}>
        <img src={movie.image_url} alt=''></img>
      </Link>
      <div className='movie-info'>
        <Link to={`movie/${movie.id}`}>
          <div className='title'>
            {movie.title}
            <span>{movie.year}</span>
          </div>
        </Link>
        <p>genre: {movie.genre}</p>
      </div>
      <div className='right-section'>
        <Checkbox onChange={handleChange} id={`${movie.id}`}></Checkbox>
      </div>
    </div>
  );
}
