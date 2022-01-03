import styled from "styled-components";

export const Container = styled.div`
  width: 328px;
  height: 60px;
  background-color: #7ebc43;
  border: none;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  margin-top: 2rem;
`;

export const NumberOfProduct = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const MinusButton = styled.button`
  width: 1.6rem;
  height: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #7ebc43;
  border: 1px solid #fff;
  border-radius: 50%;

  color: #fff;
  font-size: 17px;
  cursor: pointer;
`;

export const PlusButton = styled.button`
  width: 1.6rem;
  height: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #7ebc43;
  border: 1px solid #fff;
  border-radius: 50%;

  color: #fff;
  font-size: 17px;
  cursor: pointer;
`;

export const Number = styled.span`
  font-size: 24px;
  color: #ffff;
`;

export const BuyButton = styled.button`
  max-width: 50%;
  background-color: #7ebc43;
  border: none;

  color: #ffff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;
