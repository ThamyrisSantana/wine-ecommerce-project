import { useState } from "react";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import { useCart } from "../../context/CartContext";

import {
  Container,
  NumberOfProduct,
  MinusButton,
  PlusButton,
  Number,
  BuyButton,
} from "./styles";

interface Props {
  id: number;
}
function AddToCartButtom({ id }: Props): JSX.Element {
  const [number, setnumber] = useState(1);
  const { addCartItem } = useCart();

  return (
    <Container>
      <NumberOfProduct>
        <MinusButton
          onClick={() => {
            number > 1 ? setnumber(number - 1) : null;
          }}
          disabled={number === 1}
        >
          <HiMinusSm />
        </MinusButton>
        <Number>{number}</Number>
        <PlusButton
          onClick={() => {
            setnumber(number + 1);
          }}
        >
          <HiPlusSm />
        </PlusButton>
      </NumberOfProduct>
      <BuyButton>Adicionar</BuyButton>
    </Container>
  );
}

export default AddToCartButtom;
