import "styled-components";

declare module "styled-components" {
  export interface DefautTheme {
    title: string;

    colors: {
      main: string;
      secondary: string;
      text: string;
      gray: string;
      lightGray: string;
      white: string;
    };
  }
}
