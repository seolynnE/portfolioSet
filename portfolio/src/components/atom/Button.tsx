import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  padding: 2px 10px;
  background-color: ${(props) => props.theme.colors.point};
  color: #fff;
  border-radius: 0px;
  font-size: ${(props) => props.theme.fontSize.sm};
  font-family: "GmarketSansMedium";
`;

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  onClick?: () => void;
}

/**
 * @param text 버튼 텍스트
 * @param className 클레스 네임
 * @param onClick 클릭 이벤트
 */
function Button(props: IButtonProps) {
  return (
    <Btn
      type="button"
      className={props.className && props.className}
      onClick={props.onClick}
    >
      {props.text}
    </Btn>
  );
}

export default Button;
