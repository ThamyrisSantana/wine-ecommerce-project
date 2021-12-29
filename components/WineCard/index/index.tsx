/* eslint-disable @next/next/no-img-element */

import {
  Container,
  WineCardContainer,
  Button,
  DiscountContainer,
  PriceContainer,
  Discount,
  PriceMember,
} from "./styles";

interface WineInfos {
  image: string;
  name: string;
  price: number;
  discount: number;
  priceMember: number;
  priceNoMember: number;
}

const WineCard: React.FC<WineInfos> = ({
  image,
  name,
  discount,
  price,
  priceMember,
  priceNoMember,
}) => {
  return (
    <Container>
      <WineCardContainer>
        <img alt={name} src={image} />
        <h2>{name}</h2>
        <PriceContainer>
          <DiscountContainer>
            <span className="price">R$ {price}</span>
            <Discount>
              <span className="discount">{discount}% OFF</span>
            </Discount>
          </DiscountContainer>
          <PriceMember>
            <span className="priceText">Sócio Wine</span>
            <span className="prprice">{priceMember}</span>
          </PriceMember>
          <span className="priceNoMemberice">
            Não sócio
            {priceNoMember}
          </span>
        </PriceContainer>
      </WineCardContainer>
      <Button>Adicionar</Button>
    </Container>
  );
};

export default WineCard;
