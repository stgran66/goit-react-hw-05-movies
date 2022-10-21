import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledMovieDetails = styled.div`
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
  margin: auto;
  margin-bottom: 30px;
  padding-top: 30px;

  img {
    object-fit: cover;
  }
`;

export const MovieDetailsContainer = styled.div`
  max-width: 400px;

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  a {
    display: inline-block;
    color: black;
    padding: 5px;
    border-radius: 5px;
    transition: background-color 250ms, color 250ms;
    :hover,
    :focus {
      background-color: #a31525;
      color: white;
    }
  }
`;

export const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;

  font-size: 20px;
  text-decoration: none;
  color: black;

  border-radius: 7px;
  cursor: pointer;
  transition: background-color 250ms, box-shadow 250ms, color 250ms;

  :hover,
  :focus {
    background-color: #a31525;
    color: white;
    box-shadow: 0 8px 6px -6px black;
  }
`;
