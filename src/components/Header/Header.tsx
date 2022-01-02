import Link from "next/link";
import {
  Container,
  Logo,
  WineBox,
  SearchContainer,
  MenuIcon,
  StyledSearchIcon,
  LogoContainer,
  SearchBorderIcon,
  AccountBorderIcon,
  WineBoxContainer,
  List,
  ListItem,
} from "./styles";

export const HeaderComponent = (): JSX.Element => {
  return (
    <Container>
      <LogoContainer>
        <MenuIcon src="menu.svg" />
        <Link href="/" passHref>
          <Logo src="logo.svg" />
        </Link>
        <List>
          <ListItem>Clube</ListItem>
          <ListItem selected>Loja</ListItem>
          <ListItem>Produtores</ListItem>
          <ListItem>Ofertas</ListItem>
          <ListItem>Eventos</ListItem>
        </List>
      </LogoContainer>
      <SearchContainer>
        <StyledSearchIcon />
        <SearchBorderIcon src="search-border.svg" />
        <AccountBorderIcon src="account.svg" />
        <WineBoxContainer>
          <WineBox src="wine-box.svg" />
        </WineBoxContainer>
      </SearchContainer>
    </Container>
  );
};
