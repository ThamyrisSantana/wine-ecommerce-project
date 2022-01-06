import React, { useState } from "react";
import Header from "../../components/Header";
import { Content, Container } from "./styles";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props): JSX.Element => {
  const [search, setSearch] = useState("");

  const onChangeSearchText = (text: string) => {
    setSearch(text);
  };

  return (
    <Container>
      <Header onChangeSearchText={onChangeSearchText} searchText={search} />
      <Content>{children}</Content>
    </Container>
  );
};

export default MainLayout;
