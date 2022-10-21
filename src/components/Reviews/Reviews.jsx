import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/MovieApi';
import { ReviewsContainer } from './Reviews.styled';

const Reviews = () => {
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
    <ReviewsContainer>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, content, author, created_at }) => {
            return (
              <li key={id}>
                <div>
                  <p>
                    <strong>Author: {author}</strong>
                  </p>
                  <p>Date: {new Date(created_at).toLocaleDateString()}</p>
                </div>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>There are no reviews yet...</p>
      )}
      {error && <p>{error}</p>}
    </ReviewsContainer>
  );
};

export default Reviews;
