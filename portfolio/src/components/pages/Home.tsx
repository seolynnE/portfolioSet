import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeWrap = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  padding-top: 80px;
  padding-left: 80px;
  background-color: ${(props) => props.theme.colors.point};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  h1 {
    font-size: 0;
  }
  .title {
    color: ${(props) => props.theme.colors.white};
    font-size: 80px;
    font-family: "Jeongnimsaji-R";
    p:last-child {
      padding-top: 6px;
      padding-left: 60px;
    }
  }
  @media (max-width: 1280px){
    padding-top: 40px;
    padding-left: 40px;
  }
  @media (max-width: 800px) {
    .title {
      font-size: 40px;
      p:last-child {
        padding-left: 0;
      }
    }
  }
`;

const Btn = styled.button`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  height: 180px;
  padding: 0;
  background-color: inherit;
  .ani-menu {
    width: 100%;
    height: 100%;
    &:hover {
      .ani-round {
        animation: spin ease-in-out 2s infinite;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
      }
    }
  }
  .ani-round {
    width: 100%;
    height: 100%;
    border: 1px solid #303030;
    border-radius: 50%;
    position: relative;
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      background-color: #303030;
      position: absolute;
      &:nth-child(1) {
        top: 0;
        left: 50%;
      }
      &:nth-child(2) {
        top: 50%;
        left: 0%;
      }
      &:nth-child(3) {
        top: 50%;
        right: -5.5%;
      }
      &:nth-child(4) {
        bottom: -5.5%;
        left: 50%;
      }
    }
  }
  .main-btn {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 140px;
    height: 140px;
    padding: 40px;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-name: noSpin;
    ul {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      margin-bottom: 2px;
    }
    ul:last-child {
      margin-bottom: 0;
    }
    li {
      width: calc(100% / 4 - 2px);
      background-color: #303030;
      border-radius: 2px;
    }
  }
  .ani-menu:hover .main-btn li {
    background-color: ${(props) => props.theme.colors.point};
    transition: 0.5s;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    70% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @media (max-width: 1280px){
    top: 60%
  }
  @media (max-width: 800px) {
    width: 100px;
    height: 100px;
    top: 45%;
    .main-btn {
      width: 70px;
      height: 70px;
      padding: 20px;
    }
    .ani-round {
      .dot:nth-child(3) {
        right: -10%;
      }
      .dot:nth-child(4) {
        bottom: -10%;
      }
    }
  }
`;

const MenuWrap = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  &.active {
    display: block;
  }
  .slide {
    position: absolute;
    width: 50%;
    height: 100%;
    background-color: #303030;
    z-index: -1;
    &.left {
      bottom: -100%;
      animation: slideUp ease-in-out 0.4s;
      animation-fill-mode: forwards;
    }
    &.right {
      top: -100%;
      right: 0;
      animation: slideDown ease-in-out 0.4s;
      animation-fill-mode: forwards;
      animation-delay: 0.4s;
    }
  }
  nav {
    position: relative;
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: 88px 0 0 80px;
    color: ${(props) => props.theme.colors.white};
    font-size: 60px;
    font-family: "Jeongnimsaji-R";
    a {
      position: absolute;
      left: -2000px;
      width: fit-content;
      margin-bottom: 60px;
      padding-bottom: 5px;
      padding-bottom: 4px;
      border-bottom: 1px solid rgba(255, 255, 255, 0);
      transition: 0.2s;
      &:hover {
        border-bottom: 1px solid rgba(255, 255, 255, 1);
      }
      &:nth-child(1) {
        animation: slideLeft1 ease-in-out 0.4s;
        animation-fill-mode: forwards;
        animation-delay: 0.8s;
      }
      &:nth-child(2) {
        top: 120px;
        animation: slideLeft2 ease-in-out 0.4s;
        animation-fill-mode: forwards;
        animation-delay: 1.4s;
      }
      &:nth-child(3) {
        top: 240px;
        animation: slideLeft3 ease-in-out 0.4s;
        animation-fill-mode: forwards;
        animation-delay: 1.5s;
      }
      &:nth-child(4) {
        top: 360px;
        animation: slideLeft4 ease-in-out 0.4s;
        animation-fill-mode: forwards;
        animation-delay: 1.6s;
      }
    }
  }
  button {
    position: absolute;
    top: 88px;
    right: 80px;
    width: 32px;
    height: 32px;
    padding: 0;
    background-color: inherit;
    transition: 0.4s;
    &:hover {
      transform: rotate(90deg);
    }
    span {
      width: 2px;
      height: 32px;
      background-color: ${(props) => props.theme.colors.white};
      position: absolute;
      top: 50%;
      left: 50%;
      &:first-child {
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &:last-child {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }
  @keyframes slideUp {
    0% {
      bottom: -100%;
    }
    100% {
      bottom: 0;
    }
  }
  @keyframes slideDown {
    0% {
      top: -100%;
    }
    100% {
      top: 0;
    }
  }
  @keyframes slideLeft1 {
    0% {
      left: -2000px;
    }
    100% {
      left: 0;
    }
  }
  @keyframes slideLeft2 {
    0% {
      left: -2000px;
    }
    100% {
      left: 0;
    }
  }
  @keyframes slideLeft3 {
    0% {
      left: -2000px;
    }
    100% {
      left: 0;
    }
  }
  @keyframes slideLeft4 {
    0% {
      left: -2000px;
    }
    100% {
      left: 0;
    }
  }
  @media (max-width: 800px) {
    button {
      top: 40px;
      right: 40px;
      width: 24px;
      height: 24px;
      span {
        height: 24px;
      }
    }
    nav {
      margin: 40px 0 0 40px;
      font-size: 30px;
      a:nth-child(2) {
        top: 80px;
      }
      a:nth-child(3) {
        top: 160px;
      }
      a:nth-child(4) {
        top: 240px;
      }
    }
  }
`;
interface MenuProps {
  className?: string;
  onClick?: () => void;
  setSlide?: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavBtn(props: MenuProps) {
  return (
    <Btn onClick={props.onClick}>
      <div className="ani-menu">
        <ul className="ani-round">
          <li className="dot"></li>
          <li className="dot"></li>
          <li className="dot"></li>
          <li className="dot"></li>
        </ul>
        <div className="main-btn">
          <ul className="main-btn-dot">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul className="main-btn-dot">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul className="main-btn-dot">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul className="main-btn-dot">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </Btn>
  );
}

function Menu(props: MenuProps) {
  const handleBtn = () => {
    if (props.setSlide) {
      props.setSlide((prevSlide) => !prevSlide);
    }
  };
  return (
    <MenuWrap className={props.className}>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/work">WORK</Link>
        <Link to="/contect">CONTECT</Link>
      </nav>
      <div className="slide left" />
      <div className="slide right">
        <button onClick={handleBtn}>
          <span />
          <span />
        </button>
      </div>
    </MenuWrap>
  );
}

function Home() {
  const [slide, setSlide] = useState(false);
  return (
    <HomeWrap>
      <Menu className={slide ? "active" : ""} setSlide={setSlide} />
      <h1>seolynn jeong portfolio</h1>
      <div className="title">
        <p>MARKUP</p>
        <p>PORTFOLIO</p>
      </div>
      <NavBtn
        onClick={() => {
          setSlide(true);
        }}
      />
    </HomeWrap>
  );
}

export default Home;
