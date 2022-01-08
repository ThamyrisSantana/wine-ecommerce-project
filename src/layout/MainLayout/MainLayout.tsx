import React, { useState } from "react";
import Header from "../../components/Header";
import { Content, Container } from "./styles";

interface Props {
  children: React.ReactNode;
  search: string;
  onChangeSearchText: (text: string) => void;
}

const MainLayout = ({
  children,
  onChangeSearchText,
  search,
}: Props): JSX.Element => {
  return (
    <Container>
      <Header onChangeSearchText={onChangeSearchText} searchText={search} />
      <Content>{children}</Content>
    </Container>
  );
};

export default MainLayout;
