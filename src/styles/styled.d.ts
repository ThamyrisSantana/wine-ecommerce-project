import "styled-components";

declare module "styled-components" {
  export interface DefautTheme {
    title: string;

    colors: {
      prink: string;
      green: string;
      text: string;
      title: string;
      lightGray: string;
      white: string;
    };
  }
}
