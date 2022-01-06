/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useState } from "react";
import HeaderComponent from "../components/Header";
import {
  Container,
  MobileVersion,
  WineContainer,
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
  WineInfos,
} from "../styles/WinePage";
import { useWineItems } from "../hooks/queries";
import { WineItem } from "../services/types";
import ProductPageWebVersion from "../components/ProductPageWebVersion";
import Head from "next/head";
import Loading from "../components/Loading/index";
import ArrowIcon from "../assets/arrow-icon";
import WinePriceContainer from "../components/WInePriceContainer/index";
import MainLayout from "../layout/MainLayout";

const limit = 9;
const page = 1;

const ProductPage = (): JSX.Element => {
  const router = useRouter();
  const name = router.query.title as string;

  const { data, status } = useWineItems({ limit, page, name });
  const [search, setSearch] = useState("");

  const wineInfo = data?.items?.[0] as WineItem;

  const onChangeSearchText = (text: string) => {
    setSearch(text);
  };

  return (
    <Container>
      <HeaderComponent
        onChangeSearchText={onChangeSearchText}
        searchText={search}
      />
      {(status === "loading" || status === "idle") && (
        <div>
          <h2>Loading...</h2>
          <Loading />
        </div>
      )}

      {status === "error" && (
        <div className="message">
          <h3>Erro</h3>
        </div>
      )}
      {status === "success" && wineInfo && (
        <>
          <Head>
            <title>{wineInfo.name}</title>
          </Head>
          <MobileVersion>
            <WineContainer>
              <WineInfos>
                <InfosHeader>
                  <Wine>Vinhos</Wine>
                  <ArrowIcon />
                  <WineCountry>{wineInfo.country}</WineCountry>
                  <ArrowIcon />
                  <Region>{wineInfo.region}</Region>
                </InfosHeader>
                <WineName>{wineInfo.name}</WineName>
                <WineAdress>
                  <WineFlag src={wineInfo.flag} alt="country flag" />
                  <Country>{wineInfo.country}</Country>
                  <Type>{wineInfo.type}</Type>
                  <Classification>{wineInfo.classification}</Classification>
                  <Size>{wineInfo.size || wineInfo.volume}</Size>
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
                id={wineInfo.id}
                image={wineInfo.image}
                name={wineInfo.name}
              />
            </PriceContainer>
          </MobileVersion>

          <ProductPageWebVersion
            avaliations={wineInfo.avaliations}
            classification={wineInfo.classification}
            country={wineInfo.country}
            flag={wineInfo.flag}
            id={wineInfo.id}
            image={wineInfo.image}
            discount={wineInfo.discount}
            name={wineInfo.name}
            price={wineInfo.price}
            priceMember={wineInfo.priceMember}
            priceNonMember={wineInfo.priceNonMember}
            rating={wineInfo.rating}
            region={wineInfo.region}
            size={wineInfo.size}
            sommelierComment={wineInfo.sommelierComment}
            type={wineInfo.type}
            volume={wineInfo.volume}
          />
        </>
      )}
    </Container>
  );
};

export default ProductPage;
