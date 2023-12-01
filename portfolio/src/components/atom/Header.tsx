import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loading from "./Loading";

const HeaderWrap = styled.nav`
  display: flex;
  gap: 12px;
  position: absolute;
  top: 20px;
  right: 40px;
  z-index: 9999;
  a {
    font-size: ${(props) => props.theme.fontSize.sm};
    font-family: "Jeongnimsaji-R";
    &:hover {
      font-weight: bold;
    }
  }
`;

const Load = () => {
  const contextValue = useContext(Load);

  if (!contextValue) {
    return <Loading />;
  }
};

function Header() {
  return (
    <HeaderWrap>
      <Link to="/">HOME</Link>
      <Link to="/:about">ABOUT</Link>
      {/* <Link to="">WORK</Link>
      <Link to="">CONTECT</Link> */}
    </HeaderWrap>
  );
}

export default Header;
