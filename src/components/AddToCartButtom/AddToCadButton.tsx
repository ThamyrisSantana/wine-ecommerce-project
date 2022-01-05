import { useState } from "react";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import { useCart } from "../../context/CartContext";
import { WineInfos } from "../WineCard/types";

import {
  Container,
  NumberOfProduct,
  MinusButton,
  PlusButton,
  Number,
  BuyButton,
} from "./styles";

interface Props {
  image: string;
  name: string;
  price: number;
  priceMember: number;
  id: number;
}

const AddToCartButtom = ({
  image,
  name,
  price,
  priceMember,
  id,
}: Props): JSX.Element => {
  const { addCartItem } = useCart();
  const [number, setnumber] = useState(1);

  const addItem = () => {
    addCartItem({
      id,
      image,
      name,
      price,
      priceMember,
      quantity: number,
    });
  };

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
      <BuyButton onClick={addItem}>Adicionar</BuyButton>
    </Container>
  );
};

export default AddToCartButtom;
