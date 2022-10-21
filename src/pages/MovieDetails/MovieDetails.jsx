import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieByID } from 'services/MovieApi';
import {
  StyledMovieDetails,
  MovieDetailsContainer,
  BackLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieID } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    async function getMovieDetails() {
      const movieData = await getMovieByID(movieID);
      setMovie(movieData);
    }
    getMovieDetails();
  }, [movieID]);

  return (
    <div>
      <BackLink to={backLinkHref}>&larr; Go Back</BackLink>
      {movie && (
        <StyledMovieDetails>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                : 'https://via.placeholder.com/300x450'
            }
            alt={`poster of ${movie.title}`}
          />
          <MovieDetailsContainer>
            <h3>
              {movie.title} ({movie.release_date.slice(0, 4)})
            </h3>

            <p>User score: {parseInt(movie.vote_average * 10)}%</p>
            <h4>Overview</h4>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <p>{movie.genres.map(obj => `${obj.name} `)}</p>

            <h4>Additional information</h4>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </MovieDetailsContainer>
        </StyledMovieDetails>
      )}
      <Outlet />
    </div>
  );
};

export default MovieDetails;
