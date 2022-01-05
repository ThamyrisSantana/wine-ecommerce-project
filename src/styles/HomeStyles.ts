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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 1.5rem;

  @media (max-width: 918px) {
    width: 100%;
    justify-content: center;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2.5rem;

  flex: 1;

  @media (max-width: 923px) {
    gap: 1rem;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 918px) {
    display: none;
  }
`;
export const FormLabel = styled.h2`
  font-size: 18px;
  color: #333333;
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

export const NumberOfProducts = styled.span`
  font-size: 18px;
  span {
    font-weight: 600;
  }
`;

export const ErrorTextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ErrorText = styled.div``;
