/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import {
  Container,
  WineCardContainer,
  Button,
  DiscountContainer,
  PriceContainer,
  Discount,
  PriceMemberContainer,
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
    </Link>
  );
};

export default WineCard;
