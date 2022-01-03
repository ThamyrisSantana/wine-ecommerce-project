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
    align-self: center;
  }
`;

export const WineContainer = styled.div`
  width: 61%;
  .cards {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2.5rem;

    flex: 1;
  }
`;
export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonsContainer = styled.div`
  width: 100%;

  margin: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 3rem;

  span {
    font-size: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    color: #b6116e;
    font-weight: 500;
  }
`;

export const PageContainer = styled.div``;
export const NumberPage = styled.div``;
