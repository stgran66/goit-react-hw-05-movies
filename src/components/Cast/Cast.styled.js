import styled from 'styled-components';

export const CastInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 100px;
  height: 250px;
  justify-content: flex-start;
  img {
    width: 100px;
    height: 150px;
    object-fit: cover;
  }
`;

export const CastContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
