import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      fontPrimary: string;
      fontGrey: string;
      fontLightGrey: string;
      bodyBgColor: string;
      point: string;
      white: string;
    };
    fontSize: {
      xl: string;
      lg: string;
      md: string;
      sm: string;
      xs: string;
    };
  }
}
