import React from 'react';
import './movieCard.scss';

export function MovieCard({ movie }) {
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
    </div>
  );
}
