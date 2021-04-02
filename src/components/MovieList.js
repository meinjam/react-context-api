import Movie from './Movie';
import { MovieContext } from '../MovieContext';
import { useContext } from 'react';

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
