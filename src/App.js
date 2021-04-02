import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import { MovieProvider } from './MovieContext';

const App = () => {
  return (
    <MovieProvider>
      <div>
        <Navbar />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
};

export default App;
