import styled from "styled-components";

export const CartBackground = styled.div<{ open: boolean }>`
  width: 100%;
  height: 100vh;

  display: ${(props) => (props.open ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  background-color: #2c2e4391;
  position: fixed;
  inset: 0;
  z-index: 1;

  align-items: center;
  justify-content: flex-end;
`;

export const CartContainer = styled.div<{ open: boolean }>`
  width: 23rem;
  height: 100%;
  top: 0;
  right: 0;
  z-index: 2;

  position: absolute;
  display: ${(props) => (props.open ? "flex" : "none")};

  background-color: ${(props) => props.theme.colors.white};
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 918px) {
    width: 18rem;
  }
`;

export const CartHeader = styled.div`
  width: 100%;
  padding: 1rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

  h2 {
    font-size: 20px;
    font-weight: 400;
  }
`;

export const ArrowButton = styled.button`
  font-size: 23px;
  border: none;
  display: flex;
  align-items: center;

  background-color: transparent;
  cursor: pointer;
`;

export const WinesConitainer = styled.div`
  font-family: "Lato", sans-serif;
  width: 100%;
  height: 88%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 1.4rem 0.5rem;
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
  font-size: 14px;
  font-weight: 550;
  color: #333333;

  @media (max-width: 918px) {
    width: 10em;
  }
`;

export const RemoveItemButton = styled.button`
  width: 1.3rem;
  height: 1.3rem;
  font-size: 13px;
  color: ${(props) => props.theme.colors.lightGray};

  display: flex;
  border: 1px solid ${(props) => props.theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
`;

export const WineCardPriceContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RealSignPrice = styled.span`
  font-size: 12px;
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
  color: #0e5e97;
`;

export const Value = styled.span`
  font-size: 20px;
  color: #0e5e97;
`;

export const DecreaseOrIncreaseButtons = styled.div`
  width: 25%;
  height: 2.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors.lightGray};
  color: ${(props) => props.theme.colors.gray};
  border-radius: 5px;
  font-size: 13px;
`;
export const DecreaseButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${(props) => props.theme.colors.gray};
`;
export const NumberOfItems = styled.span`
  margin: 0 0.4rem;
`;

export const IncreaseButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${(props) => props.theme.colors.gray};
`;

export const PriceContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: flex-end;
  font-size: 12px;
  color: #718096;
  text-decoration: line-through;
`;

export const Prices = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
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
  font-size: 20px;
  color: ${(props) => props.theme.colors.gray};
  font-weight: 500;
`;

export const TotalValue = styled.div`
  font-size: 28px;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 0.8rem 0;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
`;

export const ToalPriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 0.2rem;
  font-weight: 400;
`;

export const RealSignTotalValue = styled.span`
  font-size: 28px;
`;

export const CheckSvg = styled.img``;
export const TotalPrice = styled.div`
  color: #b6116e;
  display: flex;
  align-items: flex-end;
  gap: 0.3rem;
`;
export const MemberPrice = styled.div`
  display: flex;
  align-self: center;
  gap: 0.3rem;

  color: #287ab5;
  font-size: 12px;
`;
