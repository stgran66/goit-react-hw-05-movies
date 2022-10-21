import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/MovieApi';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { movieID } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        const response = await getMovieReviews(movieID);
        const reviews = response.data.results;
        setReviews(reviews);
      } catch (error) {
        setError(error.message);
      }
    }

    getReviews();
  }, [movieID]);

  return (
    <div>
      {reviews.length > 0 ? (
        reviews.map(({ id, content, author }) => {
          return (
            <li key={id}>
              <p>
                <strong>{author}</strong>
              </p>
              <p>{content}</p>
            </li>
          );
        })
      ) : (
        <p>There are no reviews yet...</p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};
