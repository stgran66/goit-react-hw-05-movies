import styled from 'styled-components';

export const StyledHome = styled.div`
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
