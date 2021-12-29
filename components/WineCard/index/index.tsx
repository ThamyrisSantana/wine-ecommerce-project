/* eslint-disable @next/next/no-img-element */

import {
  Container,
  WineCardContainer,
  Button,
  DiscountContainer,
  PriceContainer,
  Discount,
  PriceMemberContainer,
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
          <PriceMemberContainer>
            <span className="priceText">Sócio Wine</span>
            <div className="priceMember">
              <span className="real">R$</span>
              <span className="price"> {priceMember}</span>
            </div>
          </PriceMemberContainer>
          <span className="priceNonMember">
            Não sócio R$
            {priceNoMember}
          </span>
        </PriceContainer>
      </WineCardContainer>
      <Button>Adicionar</Button>
    </Container>
  );
};

export default WineCard;
