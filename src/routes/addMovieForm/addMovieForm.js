import React, { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { Header } from '../../components/header/header';
import './addMovieForm.scss';

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  }
  if (!values.director) {
    errors.director = 'Required';
  }
  if (!values.genre) {
    errors.genre = 'Required';
  }
  if (!values.year) {
    errors.year = 'Required';
  } else if (!/^[0-9]+$/.test(values.year)) {
    errors.year = 'Year required';
  } else if (values.year < 1000 || values.year > new Date().getFullYear()) {
    errors.year = 'Wrong number';
  }
  if (!values.description) {
    errors.description = 'Required';
  }
  if (
    !/^$|([(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*))/.test(
      values.image_url
    )
  ) {
    errors.image_url = 'Invalid URL';
  }
  return errors;
};

export function AddMovieForm() {
  const [duplicateError, setDuplicateError] = useState(false);
  const [postSuccess, setPostSuccess] = useState(false);
  const formik = useFormik({
    initialValues: {
      title: '',
      director: '',
      genre: '',
      year: undefined,
      description: '',
      image_url: '',
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      axios
        .post('http://localhost:5000/movie', values)
        .then(() => {
          setDuplicateError(false);
          resetForm();
          setPostSuccess(true);
        })
        .catch((error) => {
          if (error.response.data === 'TITLE_DUPLICATE') {
            setDuplicateError(true);
          }
        });
    },
  });
  return (
    <div>
      <Header></Header>
      <form onSubmit={formik.handleSubmit} className='add-movie'>
        <div className='form-item'>
          <label htmlFor='title'>Title</label>
          <input
            id='title'
            name='title'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className='error'>{formik.errors.title}</div>
          ) : null}
          {duplicateError ? (
            <div className='error'>Don't pass title duplicates!</div>
          ) : null}
        </div>
        <div className='form-item'>
          <label htmlFor='director'>Director</label>
          <input
            id='director'
            name='director'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.director}
          />
          {formik.touched.director && formik.errors.director ? (
            <div className='error'>{formik.errors.director}</div>
          ) : null}
        </div>
        <div className='form-item'>
          <label htmlFor='genre'>Genre</label>
          <input
            id='genre'
            name='genre'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.genre}
          />
          {formik.touched.genre && formik.errors.genre ? (
            <div className='error'>{formik.errors.genre}</div>
          ) : null}
        </div>
        <div className='form-item'>
          <label htmlFor='year'>Year</label>
          <input
            id='year'
            name='year'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.year}
          />
          {formik.touched.year && formik.errors.year ? (
            <div className='error'>{formik.errors.year}</div>
          ) : null}
        </div>
        <div className='form-item'>
          <label htmlFor='description'>Description</label>
          <input
            id='description'
            name='description'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className='error'>{formik.errors.description}</div>
          ) : null}
        </div>
        <div className='form-item'>
          <label htmlFor='image-url'>Image url</label>
          <input
            id='image-url'
            name='image_url'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.image_url}
          />
          {formik.touched.image_url && formik.errors.image_url ? (
            <div className='error'>{formik.errors.image_url}</div>
          ) : null}
        </div>
        <div className='submit-area'>
          <button type='submit'>Submit</button>
          {postSuccess ? (
            <div className='success'>Your movie has been posted!</div>
          ) : (
            <div />
          )}
        </div>
      </form>
    </div>
  );
}
