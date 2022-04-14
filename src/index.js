import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddMovieForm } from './components/addMovieForm/addMovieForm';
import { ViewMovie } from './components/viewMovie/viewMovie';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='movie/:id' element={<ViewMovie />}></Route>
        </Route>
        <Route path='/add-movie' element={<AddMovieForm />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
