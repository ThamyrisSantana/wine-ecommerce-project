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

export const Main = styled.main`
  overflow: hidden;
`;

export const Cards = styled.div`
  width: 100%;
  align-self: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(156px, 1fr));
  max-width: 832px;

  grid-gap: 27px;

  @media (min-width: 918px) {
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    grid-gap: 32px;
  }
`;

export const FilterContainer = styled.aside`
  display: none;

  @media (min-width: 918px) {
    flex-shrink: 0;
    min-width: 256px;
    display: flex;
    flex-direction: column;
  }
`;
export const FilterContainerMobile = styled.div``;

export const FilterTitle = styled.h2`
  margin: 0;
  margin-bottom: 32px;
  font-family: Neo Sans Std;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
`;

export const FilterLabel = styled.p`
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
  color: #333333;
  margin: 0 0 16px;
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

export const NumberOfProducts = styled.p`
  font-size: 18px;
  line-height: 22px;
  margin: 0 0 32px;
`;

export const Highlight = styled.span`
  font-weight: 600;
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
