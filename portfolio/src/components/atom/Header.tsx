import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const HeaderWrap = styled.nav`
  display: flex;
  gap: 12px;
  position: absolute;
  top: 20px;
  right: 80px;
  z-index: 9999;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  a {
    font-size: ${(props) => props.theme.fontSize.sm};
    font-family: "Jeongnimsaji-R";
    &:hover,
    &.active {
      font-weight: bold;
    }
  }
  @media (max-width: 800px) {
    right: 40px;
  }
`;

function Header() {
  const location = useLocation();

  return (
    <HeaderWrap>
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        HOME
      </Link>
      <Link
        to="/about"
        className={location.pathname === "/about" ? "active" : ""}
      >
        ABOUT
      </Link>
      <Link
        to="/work"
        className={location.pathname === "/work" ? "active" : ""}
      >
        WORK
      </Link>
      <Link
        to="/contect"
        className={location.pathname === "/contect" ? "active" : ""}
      >
        CONTACT
      </Link>
    </HeaderWrap>
  );
}

export default Header;
