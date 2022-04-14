import { MoviesList } from './components/moviesList/moviesList';
import { Header } from './components/header/header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <MoviesList></MoviesList>
      <Outlet />
    </div>
  );
}

export default App;
