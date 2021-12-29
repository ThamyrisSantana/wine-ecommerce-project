import styled from "styled-components";

export const Container = styled.div`
  width: 256px;
  height: 500px;
  margin-top: 2rem;
`;

export const WineCardContainer = styled.div`
  width: 270px;
  height: 360px;
  background-color: #fff;
  box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  text-align: center;
  padding: 0.5rem;

  img {
    width: 100%;
    height: 180px;
    object-fit: contain;
  }

  h2 {
    font-size: 16px;
    font-weight: 500;
    color: #1d1d1b;
  }
`;

export const Button = styled.button`
  width: 280px;
  height: 38px;
  border: none;
  background-color: #7ebc43;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 3.89354px;
  box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);
`;

export const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

export const DiscountContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  .price {
    font-size: 11px;
    color: #888888;
    text-decoration: line-through;
  }
`;
export const Discount = styled.div`
  width: 49px;
  height: 13px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 2px;
  background-color: #f79552;

  color: #fff;
  font-size: 10px;
`;
export const PriceMember = styled.div`
  gap: 1rem;
  .priceText {
    font-size: 11px;
    text-transform: uppercase;
    color: #1d1d1b;
  }

  .price {
    color: #b6116e;
    font-size: 23px;
  }
`;
export const d = styled.button``;
