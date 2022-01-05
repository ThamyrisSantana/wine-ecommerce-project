import { TextField } from "@mui/material";
import Link from "next/link";
import { useCart } from "../../context/CartContext";

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
  Button,
  WineBoxQuantity,
  LogoListContainer,
} from "./styles";

interface Props {
  onChangeSearchText: (text: string) => void;
  searchText: string;
}

const HeaderComponent = ({
  onChangeSearchText,
  searchText,
}: Props): JSX.Element => {
  const { cartList } = useCart();

  const itemsTotalQuantity = cartList.reduce(function (prevVal, elem) {
    return prevVal + elem.quantity;
  }, 0);

  return (
    <Container>
      <LogoListContainer>
        <LogoContainer>
          <MenuIcon src="menu.svg" />
          <Link href="/" passHref>
            <a>
              <Logo src="logo.svg" />
            </a>
          </Link>
        </LogoContainer>
        <List>
          <ListItem>Clube</ListItem>
          <ListItem selected>Loja</ListItem>
          <ListItem>Produtores</ListItem>
          <ListItem>Ofertas</ListItem>
          <ListItem>Eventos</ListItem>
        </List>
      </LogoListContainer>

      <SearchContainer>
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
          value={searchText}
          onChange={(e) => onChangeSearchText(e.target.value)}
        />

        <Button>
          <StyledSearchIcon />
        </Button>
        <Button>
          <SearchBorderIcon src="search-border.svg" />
        </Button>
        <AccountBorderIcon src="account.svg" />
        <WineBoxContainer>
          <WineBox src="winebox.svg" />
          <WineBoxQuantity>{itemsTotalQuantity}</WineBoxQuantity>
        </WineBoxContainer>
      </SearchContainer>
    </Container>
  );
};

export default HeaderComponent;
