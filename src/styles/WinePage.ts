import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const MobileVersion = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  font-family: "Lato";
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
  font-family: "Neo Sans Std";
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
  font-family: "Neo Sans Std";
  font-size: 20px;
  color: #111111;
  font-weight: 700;
  margin: 0;
`;

export const DescriptionParagraph = styled.p`
  margin: 0.5rem 0;
  font-size: 16px;
  color: #555555;
  font-weight: 400;
  font-family: "Lato";
`;

export const Wine = styled.span`
  color: #c81a78;
`;

export const WineCountry = styled.span`
  color: #c81a78;
`;

export const Region = styled.span`
  color: #888888;
`;
