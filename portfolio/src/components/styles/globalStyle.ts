import { ResetStyle } from "./resetStyle";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
${ResetStyle};
html{
    font-size: 62.5%;
}
body {
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: ${(props) => props.theme.colors.bodyBgColor};
  color: ${(props) => props.theme.colors.fontPrimary};
}

`;
