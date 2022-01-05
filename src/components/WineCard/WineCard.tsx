/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useCart } from "../../context/CartContext";
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

const WineCard = ({
  image,
  name,
  discount,
  price,
  priceMember,
  priceNoMember,
  id,
}: WineInfos): JSX.Element => {
  const { addCartItem } = useCart();

  const addItem = () => {
    addCartItem({
      id,
      image,
      name,
      price,
      priceMember,
      quantity: 1,
    });
  };

  return (
    <Container>
      <Link href={`/${id}?title=${name}`} passHref>
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
      </Link>
      <Button onClick={addItem}>Adicionar</Button>
    </Container>
  );
};

export default WineCard;
