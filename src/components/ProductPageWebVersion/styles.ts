import styled from "styled-components";

export const WebVersion = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;

  @media (max-width: 918px) {
    display: none;
  }
`;

export const WineContainerWeb = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-start;
`;
export const WineInfosWeb = styled.div`
  width: 35%;
  background-color: back;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  font-family: "Lato", sans-serif;

  @media (max-width: 1111px) {
    width: 40%;
  }
`;

export const ImageContainerWeb = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WineImageWeb = styled.img`
  width: 50vw;
  height: 70vh;
  object-fit: contain;
`;

export const InfosHeaderWeb = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const WineWeb = styled.span`
  color: ${(props) => props.theme.colors.main};
  font-weight: 700;
`;

export const WineCountryWeb = styled.span`
  color: ${(props) => props.theme.colors.main};
  font-weight: 700;
`;

export const RegionWeb = styled.span`
  color: ${(props) => props.theme.colors.lightGray};
  font-weight: 700;
`;

export const WineNameWeb = styled.h2`
  min-height: 2rem;
  font-family: "Neo Sans Std", sans-serif;
  font-size: 30px;
  color: #111111;
  font-weight: 700;
  margin: 1.2rem 0 0.8rem 0;
`;

export const WineFlagWeb = styled.img`
  width: 18px;
`;

export const WineAdressWeb = styled.span`
  width: 100%;
  display: flex;
  gap: 0.5rem;
`;

export const CountryWeb = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.colors.text};
`;
export const TypeWeb = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.colors.text};
`;
export const ClassificationWeb = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.colors.text};
`;
export const SizeWeb = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.colors.text};
`;

export const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

export const Avaliations = styled.div`
  margin-left: 1rem;
`;

export const PriceContainerWeb = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0;
  margin: 3rem 0;
`;
export const PriceMemberContainer = styled.span`
  color: ${(props) => props.theme.colors.main};
  font-weight: 900;
`;
export const RealSign = styled.span`
  font-size: 30px;
`;
export const PriceMember = styled.span`
  font-size: 45px;
`;
export const PriceNonMember = styled.span`
  font-size: 17px;
  text-transform: uppercase;
  font-weight: 700;
  color: ${(props) => props.theme.colors.lightGray};
`;

export const DescriptionContainerWeb = styled.div`
  width: 90%;
`;

export const DescriptionTitleWeb = styled.span`
  font-size: 17px;
  font-weight: 500;
  color: #111111;
  font-family: "Neo Sans Std", sans-serif;
`;
export const DescriptionParagraphWeb = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.gray}; ;
`;

export const Arrow = styled.button`
  align-self: flex-start;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;
export const BackText = styled.span`
  font-size: 20px;
  font-family: "Neo Sans Std", sans-serif;
`;
