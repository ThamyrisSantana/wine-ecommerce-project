import styled from "styled-components";

export const Container = styled.div`
  width: 5rem;
  height: 5rem;

  border: 6px solid #d8d2c4;
  border-left-color: #b6116e;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
