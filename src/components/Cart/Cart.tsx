import { ReactNode } from "react";
import { HiArrowSmLeft, HiMinusSm, HiPlusSm, HiX } from "react-icons/hi";
import { AiOutlineArrowLeft } from "react-icons/ai";
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
  Value,
  ValueContainer,
  RealSign,
  DecreaseOrIncreaseButtons,
  DecreaseButton,
  NumberOfItems,
  IncreaseButton,
  Text,
  ToalPriceContainer,
  PriceContainer,
  RealSignPrice,
  ArrowButton,
  Prices,
  RealSignTotalValue,
  CheckSvg,
  TotalPrice,
  MemberPrice,
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
            <AiOutlineArrowLeft />
          </ArrowButton>
          <h2>WineBox</h2>
          <span>({cartSize})</span>
        </CartHeader>
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
                    <WineCardPriceContainer>
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
                      </DecreaseOrIncreaseButtons>{" "}
                      <Prices>
                        <PriceContainer>
                          <RealSignPrice>R$</RealSignPrice>
                          <span>{item.price}</span>
                        </PriceContainer>
                        <ValueContainer>
                          <RealSign>R$</RealSign>

                          <Value>
                            {item.quantity > 1
                              ? (item.priceMember * item.quantity).toFixed(2)
                              : item.priceMember}
                          </Value>
                        </ValueContainer>
                      </Prices>
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
              <TotalPrice>
                <RealSignTotalValue>R$</RealSignTotalValue>
                <TotalValue>{totalValue.toFixed(2)}</TotalValue>
              </TotalPrice>
              <MemberPrice>
                <CheckSvg src="svgexport-1.svg" />
                <span>Desconto de Sócio</span>
              </MemberPrice>
            </ToalPriceContainer>
          </TotalValueContainer>
          <CheckoutButton>Finalizar pedido</CheckoutButton>
        </CheackOutContainer>
      </CartContainer>
    </CartBackgroumg>
  );
};

export default Cart;
