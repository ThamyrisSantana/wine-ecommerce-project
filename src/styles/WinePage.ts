import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const MobileVersion = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  gap: 1rem;

  @media (min-width: 918px) {
    display: none;
  }
`;

export const WineContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0rem 1rem 0 1rem;
`;
export const WineInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Lato", sans-serif;
  gap: 0.5rem;
`;
export const ImageContainer = styled.div`
  width: 100%;
  height: 333px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;
export const DescriptionContainer = styled.div`
  width: 100%;
  height: 20%;
  padding: 2rem 0.5rem;
  margin-bottom: 1rem;
`;

export const PriceContainer = styled.div`
  width: 100%;
  align-self: flex-end;
`;

export const InfosHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  gap: 0.3rem;
`;

export const WineName = styled.h2`
  min-height: 2rem;
  font-family: "Neo Sans Std", sans-serif;
  font-size: 20px;
  color: #111111;
  font-weight: 700;
`;

export const WineAdress = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;

export const WineImage = styled.img`
  height: 100%;
`;

export const WineFlag = styled.img`
  width: 16px;
`;

export const Country = styled.span`
  font-size: 14px;
  color: #333333;
`;

export const Type = styled.span`
  font-size: 14px;
  color: #333333;
`;

export const Classification = styled.span`
  font-size: 14px;
  color: #333333;
`;

export const Size = styled.span`
  font-size: 14px;
  color: #333333;
`;

export const DescriptionTitle = styled.span`
  font-family: "Neo Sans Std", sans-serif;
  font-size: 20px;
  color: #111111;
  font-weight: 700;
  margin: 0;
`;

export const DescriptionParagraph = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
  font-weight: 400;
  font-family: "Lato", sans-serif;
`;

export const Wine = styled.span`
  color: ${(props) => props.theme.colors.main};
`;

export const WineCountry = styled.span`
  color: ${(props) => props.theme.colors.main};
`;

export const Region = styled.span`
  color: ${(props) => props.theme.colors.lightGray}; ;
`;
