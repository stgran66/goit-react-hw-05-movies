import { useState, useEffect, useRef } from 'react';
import { getMovieByQuery } from 'services/MovieApi';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const queryString = searchParams.get('query');
  const firstRenderQuery = useRef(queryString);

  useEffect(() => {
    const getFilms = async () => {
      try {
        if (firstRenderQuery.current) {
          const data = await getMovieByQuery(firstRenderQuery.current);
          setMovies(data);
        }
      } catch (error) {
        setError(error.message);
      }
    };
    getFilms();
  }, []);

  const onQuery = async e => {
    e.preventDefault();
    const query = e.target.query.value;
    try {
      setSearchParams({ query });
      const response = await getMovieByQuery(queryString);
      setMovies(response);
    } catch (error) {
      setError(error.message);
    }
  };

  const updateQueryString = e => {
    const nextParams = e.target.value !== '' ? { query: e.target.value } : {};
    setSearchParams(nextParams);
  };

  return (
    <div>
      <form onSubmit={onQuery}>
        <input name="query" onChange={updateQueryString}></input>
        <button type="submit">search</button>
      </form>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};
