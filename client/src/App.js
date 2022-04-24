import { MoviesList } from './components/moviesList/moviesList';
import { Header } from './components/header/header';
import { Route, Routes } from 'react-router-dom';
import { AddMovieForm } from './routes/addMovieForm/addMovieForm';
import { ViewMovie } from './routes/viewMovie/viewMovie';
import { FavoriteMovieProvider } from './contexts/favoriteMovieContext';
import { MovieNotFound } from './routes/movieNotFound/movieNotFound';
import { NoMatch } from './routes/noMatch/noMatch';

function App() {
  return (
    <div className='App'>
      <FavoriteMovieProvider>
        <Header></Header>
        <Routes>
          <Route path='/' element={<MoviesList />}>
            <Route path='movie/:id' element={<ViewMovie />}></Route>
          </Route>
          <Route path='/add-movie' element={<AddMovieForm />}></Route>
          <Route path='/movie-not-found' element={<MovieNotFound />}></Route>
          <Route path='*' element={<NoMatch />}></Route>
        </Routes>
      </FavoriteMovieProvider>
    </div>
  );
}

export default App;
