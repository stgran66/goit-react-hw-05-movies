import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from 'services/MovieApi';

export const Home = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  const getMovies = async () => {
    try {
      const data = await getTrendingMovies();
      setMovies(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      {error && <p>{error}</p>}
      {movies ? (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
