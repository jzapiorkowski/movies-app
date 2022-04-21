import { moviesClient } from '../../api/moviesClient';
import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './viewMovie.scss';
import { AiOutlineClose } from 'react-icons/ai';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  FavoriteMoviesContext,
  UpdateFavoriteMoviesContext,
} from '../../contexts/favoriteMovieContext';
import noMovieImage from '../../assets/images/noMovieImage.jpg';
import Rating from '@mui/material/Rating';

export function ViewMovie() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [movieInfo, setMovieInfo] = useState({});
  const [movieRatingStars, setMovieRatingStars] = useState(null);
  const [alreadyRated, setAlreadyRated] = useState(false);

  const favoriteMoviesList = useContext(FavoriteMoviesContext);
  const updateFavoriteMoviesContext = useContext(UpdateFavoriteMoviesContext);

  const isFavorite = favoriteMoviesList.includes(movieInfo.id);

  useEffect(() => {
    moviesClient.get(`/movie/${id}`).then((response) => {
      setMovieInfo(response.data);
      setMovieRatingStars(response.data.rating);
    });
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'unset');
  }, []);

  const handleClose = () => {
    navigate('/');
  };

  const handleUsersRating = (event) => {
    setMovieRatingStars(Number(event.target.value));
    moviesClient.patch(`/movie/${id}/rate?score=${event.target.value}`);
    setAlreadyRated(true);
  };

  return (
    <div className='movie-modal-wrapper'>
      <div className='movie-modal'>
        <img
          src={movieInfo.image_url ? movieInfo.image_url : noMovieImage}
          alt=''
        ></img>
        <div className='options'>
          <div className='close-button' onClick={handleClose}>
            <AiOutlineClose />
          </div>
        </div>
        <div className='main'>
          {movieInfo.title}
          <div className='favorite-icon'>
            {isFavorite ? (
              <FavoriteIcon
                onClick={() => updateFavoriteMoviesContext(movieInfo.id)}
              />
            ) : (
              <FavoriteBorderIcon
                onClick={() => updateFavoriteMoviesContext(movieInfo.id)}
              />
            )}
          </div>
        </div>
        <div className='rating-area'>
          <Rating
            name='simple-controlled'
            value={movieRatingStars}
            onChange={handleUsersRating}
            size='large'
            sx={{
              width: '150px',
              height: '30px',
            }}
            readOnly={alreadyRated}
          />
          {alreadyRated ? (
            <p>You rated this movie {movieRatingStars}/5</p>
          ) : null}
        </div>
        <p className='description'>{movieInfo.description}</p>
        <p className='director'>Directed by: {movieInfo.director}</p>
        <div className='year'>Year: {movieInfo.year}</div>
      </div>
    </div>
  );
}
