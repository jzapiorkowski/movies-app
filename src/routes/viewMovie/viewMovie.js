import { moviesClient } from '../../api/moviesClient';
import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './viewMovie.scss';
import { AiOutlineClose } from 'react-icons/ai';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  FavoriteMoviesContext,
  UpdateFavoriteMoviesContext,
} from '../../contexts/favoriteMovieContext';

export function ViewMovie() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [movieInfo, setMovieInfo] = useState({});

  const favoriteMoviesList = useContext(FavoriteMoviesContext);
  const updateFavoriteMoviesContext = useContext(UpdateFavoriteMoviesContext);

  const isFavorite = favoriteMoviesList.includes(movieInfo.id);

  useEffect(() => {
    moviesClient.get(`/movie/${id}`).then((response) => {
      setMovieInfo(response.data);
    });
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'unset');
  }, []);

  const handleClose = () => {
    navigate('/');
  };

  const ratingStars = () => {
    let tmp = [];
    for (let i = 0; i < 5; i++) {
      tmp.push(
        <div className='star' key={i}>
          {i < movieInfo.rating ? <StarIcon /> : <StarBorderIcon />}
        </div>
      );
    }
    return <div className='stars'>{tmp}</div>;
  };

  return (
    <div className='movie-modal-wrapper'>
      <div className='movie-modal'>
        <img src={movieInfo.image_url} alt=''></img>
        <div className='options'>
          <div className='close-button' onClick={handleClose}>
            <AiOutlineClose />
          </div>
        </div>
        <div className='main'>
          {movieInfo.title} ({movieInfo.year}){ratingStars()}
        </div>
        <p className='description'>{movieInfo.description}</p>
        <p className='director' onClick={ratingStars}>
          Directed by: {movieInfo.director}
        </p>
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
    </div>
  );
}
