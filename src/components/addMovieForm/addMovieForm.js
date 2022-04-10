import React from 'react';
import { useFormik } from 'formik';

export function AddMovieForm() {
  const formik = useFormik({
    initialValues: {
      title: '',
      director: '',
      genre: '',
      year: undefined,
      description: '',
      image_url: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className='add-movie'>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='title'>Title</label>
        <input
          id='title'
          name='title'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        <label htmlFor='director'>Director</label>
        <input
          id='director'
          name='director'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.director}
        />
        <label htmlFor='genre'>Genre</label>
        <input
          id='genre'
          name='genre'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.genre}
        />
        <label htmlFor='year'>Year</label>
        <input
          id='year'
          name='year'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.year}
        />
        <label htmlFor='description'>Description</label>
        <input
          id='description'
          name='description'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />
        <label htmlFor='image-url'>Image url</label>
        <input
          id='image-url'
          name='image-url'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.image_url}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
