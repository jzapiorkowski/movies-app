import React from 'react';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import './movieNotFound.scss';

export function MovieNotFound() {
  return (
    <h1>
      Sorry, but we can't find a movie you are looking for
      <SentimentVeryDissatisfiedIcon />
    </h1>
  );
}
