import styled from "styled-components";

export const Container = styled.div`
  width: 280px;
  margin-top: 2rem;
`;

export const WineCardContainer = styled.div`
  width: 100%;
  height: 360px;
  background-color: #fff;
  box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  text-align: center;
  padding: 0.5rem;
  cursor: pointer;
`;

export const Button = styled.button`
  width: 100%;
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
  gap: 0.3rem;
`;

export const DiscountContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
export const DiscountDiv = styled.div`
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
export const PriceMemberContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 190px;
  object-fit: contain;
`;

export const Name = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: #1d1d1b;
`;

export const Price = styled.span`
  font-size: 11px;
  color: #888888;
  text-decoration: line-through;
`;

export const PriceText = styled.span`
  font-size: 11px;
  text-transform: uppercase;
  color: #1d1d1b;
  margin-right: 0.5rem;
  font-weight: 700;
`;

export const PriceMemberDiv = styled.div`
  display: flex;
  align-items: center;
`;
export const RealSign = styled.span`
  font-size: 11px;
  color: #b6116e;
  margin-right: 0.2rem;
`;

export const PriceMember = styled.span`
  color: #b6116e;
  font-size: 23px;
`;

export const PriceNonMember = styled.span`
  font-size: 12px;
  color: #888888;
  text-transform: uppercase;
  font-weight: 700;
`;

export const Discount = styled.span``;
