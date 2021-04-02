import { MovieContext } from '../MovieContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className='navbar'>
      <Link to='/'>
        <h3>Dev Ed</h3>
      </Link>
      <div className='nav-sub'>
        <p>List of Movies: {movies.length}</p>
        <Link to='/create' className='add'>
          Add
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
