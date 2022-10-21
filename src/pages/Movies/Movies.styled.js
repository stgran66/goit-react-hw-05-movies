import styled from 'styled-components';

export const MoviesContainer = styled.div`
  padding: 20px 0;

  form {
    display: flex;
    gap: 20px;

    input {
      padding: 5px 10px;
      border-radius: 7px;
      border: 1px solid black;
      transition: border 250ms;
      :hover,
      :focus {
        border-color: #a31525;
      }
    }

    button {
      border-radius: 7px;
      border: none;
      background-color: #a31525;
      color: white;
      padding: 5px 10px;
      font-size: 18px;
      transition: background-color 250ms;

      :hover,
      :focus {
        background-color: #312d2d;
      }
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 80vh;
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
