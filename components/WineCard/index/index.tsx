/* eslint-disable @next/next/no-img-element */

import {
  Container,
  WineCard,
  Button,
  DiscountContainer,
  PriceContainer,
} from "./styles";

interface WineInfos {
  image: string;
  name: string;
  price: number;
  discount: number;
  priceMember: number;
  priceNoMember: number;
}

export const Index: React.FC<WineInfos> = ({
  image,
  name,
  discount,
  price,
  priceMember,
  priceNoMember,
}) => {
  return (
    <Container>
      <WineCard>
        <img alt={name} src={image} />
        <h2>{name}</h2>
        <PriceContainer>
          <div>
            <span>R$ {price}</span>
            <DiscountContainer>
              <span>{discount}% OFF</span>
            </DiscountContainer>
          </div>
          <span>SÓCIO WINE {priceMember}</span>
          <span>
            NÃO SÓCIO
            {priceNoMember}
          </span>
        </PriceContainer>
      </WineCard>
      <Button>Adicionar</Button>
    </Container>
  );
};
