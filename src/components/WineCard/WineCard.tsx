/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import {
  Container,
  WineCardContainer,
  Button,
  DiscountContainer,
  PriceContainer,
  Image,
  Name,
  Price,
  DiscountDiv,
  PriceText,
  PriceMemberDiv,
  RealSign,
  PriceMember,
  PriceNonMember,
  PriceMemberContainer,
  Discount,
} from "./styles";
import { WineInfos } from "./types";

const WineCard: React.FC<WineInfos> = ({
  image,
  name,
  discount,
  price,
  priceMember,
  priceNoMember,
  id,
}) => {
  return (
    <Link href={`/${id}?title=${name}`} passHref>
      <Container>
        <WineCardContainer>
          <Image alt={name} src={image} />
          <Name>{name}</Name>
          <PriceContainer>
            <DiscountContainer>
              <Price className="price">R$ {price}</Price>
              <DiscountDiv>
                <Discount className="discount">{discount}% OFF</Discount>
              </DiscountDiv>
            </DiscountContainer>
            <PriceMemberContainer>
              <PriceText>Sócio Wine</PriceText>
              <PriceMemberDiv className="priceMember">
                <RealSign>R$ </RealSign>
                <PriceMember className="price"> {priceMember}</PriceMember>
              </PriceMemberDiv>
            </PriceMemberContainer>
            <PriceNonMember className="priceNonMember">
              Não sócio R$
              {priceNoMember}
            </PriceNonMember>
          </PriceContainer>
        </WineCardContainer>
        <Button>Adicionar</Button>
      </Container>
    </Link>
  );
};

export default WineCard;
