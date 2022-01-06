import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

html,
body {
  width: 99.6%;
  height: 100vh;
  background-color: #f5f5f5;

  padding: 0;
  margin: 0;
  font-family: Lato, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

`;
