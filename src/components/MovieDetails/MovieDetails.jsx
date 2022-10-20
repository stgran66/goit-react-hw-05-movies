import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieByID } from 'services/MovieApi';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieID } = useParams();

  useEffect(() => {
    async function getMovieDetails() {
      const movieData = await getMovieByID(movieID);
      console.log(movieData);
      setMovie(movieData);
    }
    getMovieDetails();
  }, [movieID]);

  return (
    <div>
      {movie && (
        <div>
          <h3>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </h3>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={`poster of ${movie.title}`}
          />
          <p>User score: {parseInt(movie.vote_average * 10)}%</p>
          <h4>Overview</h4>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <p>{movie.genres.map(obj => `${obj.name} `)}</p>

          <h4>Additional information</h4>
          <ul>
            <li>
              <Link>Cast</Link>
            </li>
            <li>
              <Link>Reviews</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
