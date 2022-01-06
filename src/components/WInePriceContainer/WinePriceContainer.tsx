import { useCart } from "../../context/CartContext";
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
  id,
  image,
  name,
}) => {
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
      <Button onClick={addItem}>Adicionar</Button>
    </Container>
  );
};

export default WinePriceContainer;
