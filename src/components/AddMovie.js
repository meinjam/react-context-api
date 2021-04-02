import { useState, useContext } from 'react';
import { MovieContext } from '../MovieContext';
import { useHistory } from 'react-router-dom';

const AddMovie = () => {
  const [movies, setMovies] = useContext(MovieContext);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const history = useHistory();

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((movie) => [...movie, { name, price, id: 34432 }]);
    setName('');
    setPrice('');
    history.push('/');
  };

  return (
    <div>
      <form onSubmit={addMovie}>
        <input type='text' onChange={updateName} value={name} />
        <input type='number' onChange={updatePrice} value={price} />
        <button type='submit'>Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
