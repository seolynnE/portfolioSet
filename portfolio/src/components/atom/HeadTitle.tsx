import React from "react";
import styled from "styled-components";
import Container from "../layout/Container";

const Title = styled.div`
  position: absolute;
  top: -148px;
  left: -88px;
  width: 540px;
  height: 540px;
  z-index: 10;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    z-index: -1;
  }
  h2 {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${(props) => props.theme.colors.white};
    font-size: 80px;
    font-family: "Jeongnimsaji-R";
    letter-spacing: -1.4px;
  }
  @media (max-width: 1540px) {
    top: -122px;
    left: -84px;
    width: 376px;
    height: 376px;
    h2 {
      font-size: 54px;
    }
  }
  @media (max-width: 1024px) {
    display: flex;
    justify-content: flex-start;
    position: relative;
    top: unset;
    left: unset;
    width: fit-content;
    height: fit-content;
    margin-top: 30px;
    margin-bottom: -20px;
    &::after {
      top: -12px;
      left: -14px;
      transform: translate(0) !important;
      width: 40px;
      height: 40px;
      background-size: 40px !important;
    }
    h2 {
      display: contents;
      color: ${(props) => props.theme.colors.fontPrimary};
      font-size: 40px;
    }
  }
`;

interface ITitleProps {
  text: string;
  className?: string;
}

/**
 * @param text 버튼 텍스트
 * @param className 클레스 네임
 */

function HeadTitle(props: ITitleProps) {
  return (
    <Container>
      <Title className={props.className}>
        <h2>{props.text}</h2>
      </Title>
    </Container>
  );
}

export default HeadTitle;
