import styled from "styled-components";

const ContainerEl = styled.div`
  display: flex;
  position: relative;
  padding: 0 80px 60px;

  @media (max-width: 800px) {
    padding: 0 40px 60px;
  }
`;

interface IContainerProps {
  className?: string;
  children: JSX.Element | JSX.Element[];
}

function Container(props: IContainerProps) {
  return (
    <ContainerEl
      className={props.className !== undefined ? props.className : ""}
    >
      {props.children}
    </ContainerEl>
  );
}
export default Container;
