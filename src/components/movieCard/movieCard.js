import React from 'react';
import './movieCard.scss';
import Checkbox from '@mui/material/Checkbox';

export function MovieCard({ handleChecked, movie }) {
  const handleChange = () => {
    handleChecked(movie.id);
  };

  return (
    <div className='movie-card' key={movie.id}>
      <img src={movie.image_url} alt=''></img>
      <div className='movie-info'>
        <div className='title'>
          {movie.title}
          <span>{movie.year}</span>
        </div>
        <p>genre: {movie.genre}</p>
      </div>
      <div className='right-section'>
        <Checkbox onChange={handleChange} id={`${movie.id}`}></Checkbox>
      </div>
    </div>
  );
}
