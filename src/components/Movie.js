const Movie = ({ movie }) => {
  return (
    <div>
      <h2>{movie.name}</h2>
      <p>${movie.price}</p>
    </div>
  );
};

export default Movie;
