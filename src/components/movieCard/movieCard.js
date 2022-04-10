import React from 'react';

export function MovieCard({ movie }) {
  return (
    <div className='movie-card' key={movie.id}>
      <img src={movie.image_url} alt=''></img>
      <h6>{movie.title}</h6>
      <p>{movie.genre}</p>
      <p>{movie.year}</p>
    </div>
  );
}
