import {
  Container,
  PriceInfos,
  DiscountContainer,
  Discount,
  Price,
  PriceMemberContainer,
  RealSign,
  PriceMember,
  PriceNonMember,
  Button,
} from "./styles";
import { WinePriceContainerProps } from "./types";

const WinePriceContainer: React.FC<WinePriceContainerProps> = ({
  discount,
  price,
  priceMember,
  priceNonMember,
}) => {
  return (
    <Container>
      <PriceInfos>
        <DiscountContainer className="discount">
          <Discount>{discount}% OFF</Discount>
        </DiscountContainer>
        <Price className="price">R$ {price}</Price>
        <PriceMemberContainer className="priceMemberContainer">
          <RealSign>R$ </RealSign>
          <PriceMember className="priceMember"> {priceMember}</PriceMember>
        </PriceMemberContainer>
        <PriceNonMember className="priceNonMember">
          Preço não sócio R$ {priceNonMember}
        </PriceNonMember>
      </PriceInfos>
      <Button>Adicionar</Button>
    </Container>
  );
};

export default WinePriceContainer;
