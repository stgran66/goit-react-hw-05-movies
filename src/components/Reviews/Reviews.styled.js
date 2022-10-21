import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  ul {
    list-style-type: none;
    padding-left: 0;

    li {
      border: 1px solid black;
      border-radius: 10px;

      padding: 10px 20px;

      :not(:last-child) {
        margin-bottom: 10px;
      }
      :nth-child(2n) {
        background-color: #a31525;
        color: white;
      }
    }
  }
  div {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
  }
`;
