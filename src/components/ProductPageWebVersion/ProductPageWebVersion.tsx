import Link from "next/link";
import { ReactNode } from "react";
import { ArrowLeft } from "../../assets/arrow-left";
import ArrowIcon from "../../assets/arrow-icon";
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
  price,
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
          <ArrowIcon />
          <WineCountryWeb>{country}</WineCountryWeb>
          <ArrowIcon />
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
          <PriceNonMember>Pre??o n??o s??cio R$ {priceNonMember}</PriceNonMember>
        </PriceContainerWeb>
        <DescriptionContainerWeb>
          <DescriptionTitleWeb>Coment??rio do Sommelier</DescriptionTitleWeb>
          <DescriptionParagraphWeb>{sommelierComment}</DescriptionParagraphWeb>
        </DescriptionContainerWeb>
        <AddToCartButtom
          id={id}
          image={image}
          name={name}
          price={price}
          priceMember={priceMember}
        />
      </WineInfosWeb>
    </WebVersion>
  );
};

export default ProductPageWebVersion;
