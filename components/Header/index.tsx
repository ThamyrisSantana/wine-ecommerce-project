/* eslint-disable @next/next/no-css-tags */
import {
  Container,
  Logo,
  WineBox,
  SearchCotainer,
  MenuIcon,
  SearchIcon,
  LogoContainer,
  SearchBorderIcon,
  AccountBorderIcon,
} from "./styles";

interface Props {
  text?: string;
}

export const HeaderComponent: React.FC<Props> = () => {
  return (
    <Container>
      <link
        href="//db.onlinewebfonts.com/c/eae734a8099f563be4380b01338ab3db?family=Neo+Sans+Std"
        rel="stylesheet"
        type="text/css"
      />
      <LogoContainer>
        <MenuIcon src="menu.svg" />
        <Logo src="logo.svg" />
        <ul>
          <li>Clube</li>
          <li id="mainListItem">Loja</li>
          <li>Produtores</li>
          <li>Ofertas</li>
          <li>Eventos</li>
        </ul>
      </LogoContainer>
      <SearchCotainer>
        <SearchIcon src="search.svg" />
        <SearchBorderIcon src="search-border.svg" />
        <AccountBorderIcon src="account.svg" />
        <div>
          <WineBox src="wine-box.svg" />
        </div>
      </SearchCotainer>
    </Container>
  );
};
