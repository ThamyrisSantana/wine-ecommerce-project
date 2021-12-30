import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  main {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

export const WineContainer = styled.div`
  width: 60%;
  .cards {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 2.5rem;

    flex: 1;
  }
`;
export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const c = styled.div``;
