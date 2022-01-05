import styled from "styled-components";

export const CartBackgroumg = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2c2e4391;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const CartContainer = styled.div`
  /* position: fixed; */
  width: 25rem;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CartHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  font-family: "Neo Sans Std";
`;

export const ArrowButton = styled.button`
  font-size: 25px;
  border: none;

  background-color: transparent;
  cursor: pointer;
`;

export const WinesConitainer = styled.div`
  font-family: "Lato";
  width: 100%;
  height: 90%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;

  gap: 4rem;
`;

export const WineCard = styled.div`
  width: 100%;
  display: flex;
`;

export const WineImage = styled.img`
  height: 7rem;
`;

export const ItemInfos = styled.div`
  width: 100%;
  gap: 0.5rem;
  margin: 0 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NameContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Name = styled.span`
  white-space: nowrap;
  width: 15em;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  font-weight: 550;
  color: #111111;
`;

export const RemoveItemButton = styled.button`
  font-size: 1.2rem;
  display: flex;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const WineCardPriceContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TotalText = styled.span`
  font-size: 17px;
  font-weight: 700;
`;

export const ValueContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: flex-end;
  font-weight: 600;
`;
export const RealSign = styled.div`
  font-size: 14px;
`;

export const Value = styled.span`
  font-size: 17px;
`;

export const DecreaseOrIncreaseButtons = styled.div`
  width: 80%;
  gap: 2rem;
`;
export const DecreaseButton = styled.button`
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 50%;
  border: 1px solid #555555;
  background-color: transparent;
  cursor: pointer;
`;
export const NumberOfItems = styled.span`
  margin: 0 2rem;
`;

export const IncreaseButton = styled.button`
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 50%;

  border: 1px solid #555555;
  background-color: transparent;
  cursor: pointer;
`;

export const CheackOutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  gap: 1.5rem;
`;

export const TotalValueContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.span`
  font-weight: 600;
`;

export const TotalValue = styled.div`
  font-size: 18px;
`;

export const CheckoutButton = styled.button`
  width: 70%;
  padding: 0.7rem;
  border: 1px solid #666666;
  border-radius: 4px;
  color: #666666;
  background-color: transparent;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #666666;
    color: #ffff;
  }
`;

export const ToalPriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.2rem;
  color: #7ebc43;
  font-weight: 800;
`;

export const PriceMemberContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: flex-end;
  color: #718096;
`;

export const PriceMember = styled.span``;

export const RealSignPriceMember = styled.span`
  font-size: 12px;
`;
