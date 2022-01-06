import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 18px;

  @media (min-width: 918px) {
    padding: 0 32px;
    display: grid;
    grid-template-columns: minmax(256px, 25%) 1fr;
  }
`;
