import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './viewMovie.scss';
import { AiOutlineClose } from 'react-icons/ai';

export function ViewMovie() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/movie/${id}`).then((response) => {
      setMovieInfo(response.data);
    });
  }, []);

  const handleClose = () => {
    navigate('/');
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
        <p className='title'>
          {movieInfo.title} ({movieInfo.year})
        </p>
        <div className='movie-info'>
          <p className='description'>{movieInfo.description}</p>
          <p>Directed by: {movieInfo.director}</p>
        </div>
      </div>
    </div>
  );
}
