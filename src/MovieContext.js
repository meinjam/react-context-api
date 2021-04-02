import { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: 'Harry Poter',
      price: 10,
      id: 23132,
    },
    {
      name: 'Game of Thrones',
      price: 12,
      id: 55976,
    },
    {
      name: 'Inception',
      price: 15,
      id: 87563,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
