import { MovieContext } from '../MovieContext';
import { useContext } from 'react';

const Navbar = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className='navbar'>
      <h3>Dev Ed</h3>
      <p>List of Movies: {movies.length}</p>
    </div>
  );
};

export default Navbar;
