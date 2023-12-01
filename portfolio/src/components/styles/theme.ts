import { DefaultTheme } from "styled-components";

const colors = {
  fontPrimary: "#191919",
  fontGrey: "#383d42",
  fontLightGrey: "#808080",
  bodyBgColor: "#fff",
  point: "#d44141",
  white: "#fff",
};

const lightColors = { ...colors };

const darkColors = {
  ...colors,
  fontPrimary: "#fff",
  fontGrey: "#bbb",
  fontLightGrey: "#cdcdcd",
  bodyBgColor: "#191919",
};

const fontSize = {
  xl: "24px",
  lg: "20px",
  md: "18px",
  sm: "16px",
  xs: "14px",
};

export const lightTheme: DefaultTheme = {
  colors: lightColors,
  fontSize: fontSize,
};
export const darkTheme: DefaultTheme = {
  colors: darkColors,
  fontSize: fontSize,
};

// export type Theme = typeof lightTheme;
