/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useState } from "react";
import { HeaderComponent } from "../components/Header";
import {
  Container,
  WineContainer,
  WineInfos,
  DescriptionContainer,
  ImageContainer,
  PriceContainer,
  InfosHeader,
  WineName,
  WineAdress,
  WineImage,
  Country,
  Type,
  Classification,
  Size,
  DescriptionTitle,
  DescriptionParagraph,
  Wine,
  WineCountry,
  Region,
  WineFlag,
} from "../styles/WinePage";
import WinePriceContainer from "../components/WInePriceContainer";
import { useWineItems } from "../hooks/queries";
import { WineItem } from "../services/types";
import ArrownIcon from "../assets/arrown-icon";

const limit = 9;
const page = 1;

const ProductPage = (): JSX.Element => {
  const [filter, setFilter] = useState(0);

  const router = useRouter();
  const name = router.query.title as string;

  const { data, status } = useWineItems({ limit, page, name });

  const wineInfo = data?.items?.[0] as WineItem;

  return (
    <Container>
      <HeaderComponent />
      {status === "success" && wineInfo && (
        <>
          <WineContainer>
            <WineInfos>
              <InfosHeader>
                <Wine>Vinhos</Wine>
                <ArrownIcon />
                <WineCountry>{wineInfo.country}</WineCountry>
                <ArrownIcon />
                <Region>{wineInfo.region}</Region>
              </InfosHeader>
              <WineName>{wineInfo.name}</WineName>
              <WineAdress>
                <WineFlag src={wineInfo.flag} alt="country flag" />
                <Country>{wineInfo.country}</Country>
                <Type>{wineInfo.type}</Type>
                <Classification>{wineInfo.classification}</Classification>
                <Size>{wineInfo.size}</Size>
              </WineAdress>
            </WineInfos>
            <ImageContainer>
              <WineImage src={wineInfo.image} alt="wine image" />
            </ImageContainer>
            <DescriptionContainer>
              <DescriptionTitle>Descrição</DescriptionTitle>
              <DescriptionParagraph>
                {wineInfo.sommelierComment}
              </DescriptionParagraph>
            </DescriptionContainer>
          </WineContainer>
          <PriceContainer>
            <WinePriceContainer
              price={wineInfo.price}
              priceMember={wineInfo.priceMember}
              priceNonMember={wineInfo.priceNonMember}
              discount={wineInfo.discount}
            />
          </PriceContainer>
        </>
      )}
    </Container>
  );
};

export default ProductPage;
