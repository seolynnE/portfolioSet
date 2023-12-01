import React from "react";
import { GlobalStyle } from "./components/styles/globalStyle";
import WatterMark from "./components/atom/WatterMark";
import Header from "./components/atom/Header";
import Router from "./router/Router";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Router />
      <WatterMark />
    </>
  );
}

export default App;
