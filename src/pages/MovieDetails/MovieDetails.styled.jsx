import styled from 'styled-components';

export const StyledMovieDetails = styled.div`
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
  margin: auto;
  padding-top: 30px;

  img {
    object-fit: cover;
  }
`;

export const MovieDetailsContainer = styled.div`
  max-width: 400px;
`;
