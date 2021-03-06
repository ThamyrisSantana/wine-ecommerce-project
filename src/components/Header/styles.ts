import styled, { css } from "styled-components";
import SearchIcon from "../../assets/search-icon";

const selectedItemStyle = css`
  height: 100%;
  color: #d14b8f;
  border-bottom: 2px solid #d14b8f;
  margin-top: 1.8rem;
`;

export const Container = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.white};
  margin-bottom: 3rem;
  z-index: 0;

  @media (min-width: 918px) {
    height: 88.23px;
    border-bottom: 2.5px solid #d1d1d1;

    padding: 2rem;
  }

  @media (min-width: 1061px) {
    padding: 0 3.5rem;
  }

  @media (min-width: 1246px) {
    padding: 0 7rem;
  }
`;

export const Logo = styled.img`
  width: 90px;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 95px;
  }
`;

export const AccountBorderIcon = styled.img`
  display: none;

  @media (min-width: 918px) {
    width: 48px;
    display: flex;
    cursor: pointer;
  }
`;

export const SearchBorderIcon = styled.img`
  display: none;

  @media (min-width: 918px) {
    width: 48px;
    display: flex;
    cursor: pointer;
  }
`;

export const WineBox = styled.img`
  margin-top: -3px;
  height: 48px;
  border-radius: 0 0 39% 39%;

  @media (min-width: 918px) {
    height: 54px;
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  cursor: pointer;
  margin-right: 0;

  @media (min-width: 918px) {
    display: none;
  }
`;

export const SearchContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const WineBoxContainer = styled.div`
  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 1rem;

  cursor: pointer;
  display: inline-block;
  position: relative;

  @media (min-width: 918px) {
    gap: 2rem;
    width: 58px;
    height: 58px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const List = styled.ul`
  display: none;

  @media (min-width: 918px) {
    display: flex;
    align-items: center;

    text-decoration: none;
    list-style: none;
    font-family: "Neo Sans Std", sans-serif;

    color: ${(props) => props.theme.colors.text};

    gap: 1.5em;

    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.7px;
  }

  @media (max-width: 986px) {
    gap: 1rem;
  }

  @media (min-width: 1184px) {
    gap: 1.2rem;
  }

  @media (min-width: 1334px) {
    gap: 1.5rem;
  }

  @media (min-width: 1436px) {
    gap: 2rem;
  }
`;

export const ListItem = styled.li<{ selected?: boolean }>`
  @media (min-width: 918px) {
    cursor: pointer;
    font-family: Neo Sans Std;

    ${(props) => (props.selected ? selectedItemStyle : undefined)}
  }
`;

export const MenuIcon = styled.img`
  cursor: pointer;

  margin-left: 1rem;
  margin-right: 1rem;
  width: 22px;

  @media (min-width: 918px) {
    display: none;
  }

  @media (min-width: 646px) {
    margin-left: 2rem;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
`;
export const Input = styled.input`
  width: 20rem;
  height: 50%;
`;

export const StyledSearchIconButton = styled.button`
  @media (min-width: 918px) {
    display: none;
  }
`;

export const LogoListContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const WineBoxQuantity = styled.div`
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 50%;
  bottom: -1px;
  color: #5cb79f;
  display: flex;
  font-size: 11px;
  height: 20px;
  justify-content: center;
  letter-spacing: normal;
  line-height: normal;
  position: absolute;
  right: -1px;
  width: 20px;
`;

export const WineBoxButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

export const SearchInput = styled.div`
  display: none;
  @media (min-width: 700px) {
  }
`;
