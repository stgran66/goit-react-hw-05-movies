import { useState } from 'react';
import { getMovieByQuery } from 'services/MovieApi';
import { Link } from 'react-router-dom';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState(null);

  const onInputChange = e => {
    setQuery(e.target.value);
  };

  const onQuery = async e => {
    e.preventDefault();
    try {
      const data = await getMovieByQuery(query);
      setMovies(data);
    } catch (error) {
      setError(error.message);
      alert(error.message);
    } finally {
      setQuery('');
    }
  };

  return (
    <div>
      <form onSubmit={onQuery}>
        <input name="query" value={query} onChange={onInputChange}></input>
        <button type="submit">search</button>
      </form>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};
