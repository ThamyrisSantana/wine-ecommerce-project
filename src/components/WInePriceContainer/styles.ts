import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.white};
  padding: 1rem;
  font-family: "Lato", sans-serif;
  margin-top: 1em;

  box-shadow: 0px -5px 5px rgba(0, 0, 0, 0.0627185);
`;

export const PriceInfos = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  align-items: flex-start;
`;

export const DiscountContainer = styled.div`
  height: 16px;
  width: 52px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  background: #f26649;
  border-radius: 2px;

  position: absolute;
  top: -45%;
`;

export const Discount = styled.span`
  font-size: 10px;
  color: ${(props) => props.theme.colors.white};
`;

export const Price = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.colors.text};
  text-decoration: line-through;
`;

export const PriceMemberContainer = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.colors.main};
`;

export const RealSign = styled.span``;

export const PriceMember = styled.span`
  font-size: 22px;
  color: ${(props) => props.theme.colors.main};
  font-weight: 700;
`;

export const PriceNonMember = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.colors.text};
`;

export const Button = styled.button`
  width: 180px;
  height: 48px;

  background-color: ${(props) => props.theme.colors.secondary};

  border: none;
  border-radius: 4px;

  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
  font-weight: 600;

  cursor: pointer;

  @media (max-width: 320px) {
    width: 135px;
    height: 45px;
  }
`;
