import { getMovieCast } from 'services/MovieApi';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CastInfo, CastContainer } from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(null);
  const { movieID } = useParams();

  useEffect(() => {
    async function getCast() {
      try {
        const credits = await getMovieCast(movieID);
        const cast = credits.data.cast;
        setCast(cast);
      } catch (error) {
        setError(error.message);
      }
    }
    getCast();
  }, [movieID]);

  const getCast = async () => {
    const data = await getMovieCast(movieID);
    const cast = data.data.cast;

    return cast;
  };
  getCast();

  return (
    <CastContainer>
      {cast &&
        cast.map(({ profile_path, name, character, id }) => (
          <CastInfo key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
              }
              alt={name}
            />
            <p>{character}</p>
            <p>{name}</p>
          </CastInfo>
        ))}
      {error && <p>{error}</p>}
    </CastContainer>
  );
};
