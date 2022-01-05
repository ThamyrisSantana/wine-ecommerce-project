import Link from "next/link";
import { ReactNode } from "react";
import { ArrowLeft } from "../../assets/arrow-left";
import ArrownIcon from "../../assets/arrown-icon";
import StarIcon from "../../assets/star-icon";
import { WineItem } from "../../services/types";
import AddToCartButtom from "../AddToCartButtom";

import {
  WebVersion,
  WineInfosWeb,
  DescriptionContainerWeb,
  ImageContainerWeb,
  PriceContainerWeb,
  InfosHeaderWeb,
  WineNameWeb,
  WineAdressWeb,
  WineImageWeb,
  CountryWeb,
  TypeWeb,
  ClassificationWeb,
  SizeWeb,
  DescriptionTitleWeb,
  DescriptionParagraphWeb,
  WineWeb,
  WineCountryWeb,
  RegionWeb,
  WineFlagWeb,
  PriceMemberContainer,
  RealSign,
  PriceMember,
  PriceNonMember,
  Arrow,
  BackText,
  StarsContainer,
  Avaliations,
} from "./styles";

const numberOfStars = [1, 2, 3, 4, 5];

const ProductPageWebVersion = ({
  avaliations,
  classification,
  country,
  flag,
  id,
  image,
  name,
  priceMember,
  priceNonMember,
  rating,
  region,
  size,
  sommelierComment,
  type,
  volume,
}: WineItem): JSX.Element => {
  return (
    <WebVersion>
      <ImageContainerWeb>
        <Link href="/" passHref>
          <Arrow>
            <ArrowLeft />
            <BackText>Voltar</BackText>
          </Arrow>
        </Link>
        <WineImageWeb src={image} alt="wine image" />
      </ImageContainerWeb>
      <WineInfosWeb>
        <InfosHeaderWeb>
          <WineWeb>Vinhos</WineWeb>
          <ArrownIcon />
          <WineCountryWeb>{country}</WineCountryWeb>
          <ArrownIcon />
          <RegionWeb>{region}</RegionWeb>
        </InfosHeaderWeb>
        <WineNameWeb>{name}</WineNameWeb>
        <WineAdressWeb>
          <WineFlagWeb src={flag} alt="country flag" />
          <CountryWeb>{country}</CountryWeb>
          <TypeWeb>{type}</TypeWeb>
          <ClassificationWeb>{classification}</ClassificationWeb>
          <SizeWeb>{size || volume}</SizeWeb>
          <StarsContainer>
            {numberOfStars.map((item) => {
              return (
                <StarIcon
                  key={item}
                  color={item <= rating ? "#F9B950" : "#F1F1F1"}
                />
              );
            })}
            <Avaliations>({avaliations})</Avaliations>
          </StarsContainer>
        </WineAdressWeb>
        <PriceContainerWeb>
          <PriceMemberContainer>
            <RealSign>R$ </RealSign>
            <PriceMember>{priceMember}</PriceMember>
          </PriceMemberContainer>
          <PriceNonMember>Preço não sócio R$ {priceNonMember}</PriceNonMember>
        </PriceContainerWeb>
        <DescriptionContainerWeb>
          <DescriptionTitleWeb>Comentário do Sommelier</DescriptionTitleWeb>
          <DescriptionParagraphWeb>{sommelierComment}</DescriptionParagraphWeb>
        </DescriptionContainerWeb>
        <AddToCartButtom id={id} />
      </WineInfosWeb>
    </WebVersion>
  );
};

export default ProductPageWebVersion;
