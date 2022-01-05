import { ReactNode } from "react";
import { HiArrowSmLeft, HiMinusSm, HiPlusSm, HiX } from "react-icons/hi";

import { useCart } from "../../context/CartContext";

import {
  CartBackgroumg,
  CartHeader,
  WinesConitainer,
  WineCard,
  TotalValueContainer,
  TotalValue,
  CheackOutContainer,
  CheckoutButton,
  CartContainer,
  WineImage,
  ItemInfos,
  NameContainer,
  Name,
  RemoveItemButton,
  WineCardPriceContainer,
  TotalText,
  Value,
  ValueContainer,
  RealSign,
  DecreaseOrIncreaseButtons,
  DecreaseButton,
  NumberOfItems,
  IncreaseButton,
  Text,
  ToalPriceContainer,
  PriceMember,
  PriceMemberContainer,
  RealSignPriceMember,
  ArrowButton,
} from "./styles";

const Cart = () => {
  const {
    cartSize,
    cartList,
    removeCartItem,
    decreaseCartItemQuantity,
    increaseCartItemQuantity,
    totalValue,
  } = useCart();

  return (
    <CartBackgroumg>
      <CartContainer>
        <CartHeader>
          <ArrowButton>
            <HiArrowSmLeft />
          </ArrowButton>
          <h2>Your Cart</h2>
          <span>{cartSize}</span>
        </CartHeader>
        <WineCard></WineCard>
        <WinesConitainer>
          {cartList.map((item) => {
            return (
              <>
                <WineCard key={item.id}>
                  <WineImage src={item.image} />
                  <ItemInfos>
                    <NameContainer>
                      <Name>{item.name}</Name>
                      <RemoveItemButton onClick={() => removeCartItem(item.id)}>
                        <HiX />
                      </RemoveItemButton>
                    </NameContainer>
                    <PriceMemberContainer>
                      <RealSignPriceMember>R$</RealSignPriceMember>
                      <PriceMember>{item.priceMember}</PriceMember>
                    </PriceMemberContainer>
                    <DecreaseOrIncreaseButtons>
                      <DecreaseButton
                        onClick={() => decreaseCartItemQuantity(item.id)}
                      >
                        <HiMinusSm />
                      </DecreaseButton>
                      <NumberOfItems>{item.quantity}</NumberOfItems>
                      <IncreaseButton
                        onClick={() => increaseCartItemQuantity(item.id)}
                      >
                        <HiPlusSm />
                      </IncreaseButton>
                    </DecreaseOrIncreaseButtons>
                    <WineCardPriceContainer>
                      <TotalText>Total: </TotalText>
                      <ValueContainer>
                        <RealSign>R$</RealSign>

                        <Value>
                          {item.quantity > 1
                            ? (item.priceMember * item.quantity).toFixed(2)
                            : item.priceMember}
                        </Value>
                      </ValueContainer>
                    </WineCardPriceContainer>
                  </ItemInfos>
                </WineCard>
              </>
            );
          })}
        </WinesConitainer>
        <CheackOutContainer>
          <TotalValueContainer>
            <Text>Total</Text>
            <ToalPriceContainer>
              <RealSign>R$</RealSign>
              <TotalValue>{totalValue.toFixed(2)}</TotalValue>
            </ToalPriceContainer>
          </TotalValueContainer>
          <CheckoutButton>Checkout</CheckoutButton>
        </CheackOutContainer>
      </CartContainer>
    </CartBackgroumg>
  );
};

export default Cart;
