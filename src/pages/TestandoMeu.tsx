import Head from "next/head";
import { HeaderComponent } from "../components/Header";
import { useState } from "react";
import WineCard from "../components/WineCard/WineCard";

import {
  Container,
  WineContainer,
  FilterContainer,
  ButtonsContainer,
  PageContainer,
  NumberPage,
} from "../styles/HomeStyles";
import { useWineItems } from "../hooks/queries";
import Cart from "../components/Cart/Cart";

const limit = 9;

const TestandoMeu = (): JSX.Element => {
  const [search, setSearch] = useState("");

  const onChangeSearchText = (text: string) => {
    setSearch(text);
  };

  return (
    <Container>
      <HeaderComponent
        searchText={search}
        onChangeSearchText={onChangeSearchText}
      />
      <Cart />
    </Container>
  );
};

export default TestandoMeu;
