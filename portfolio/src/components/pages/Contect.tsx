import styled from "styled-components";
import HeadTitle from "../atom/HeadTitle";
import Container from "../layout/Container";

const ContectWrap = styled.div`
  word-break: keep-all;
  .container {
    min-height: calc(100vh - 60px);
    height: 100%;
    padding-top: 100px;
    flex-direction: column;
    align-items: center;
    gap: 42px;
    height: 100%;
  }
  .title {
    &::after {
      transform: translate(-57%, -52%) rotate(170deg);
      background-image: url("data:image/svg+xml,%3C!--%3Fxml version='1.0' standalone='no'%3F--%3E%3Csvg id='sw-js-blob-svg' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='sw-gradient' x1='0' x2='1' y1='1' y2='0'%3E%3Cstop id='stop1' stop-color='rgba(212, 65, 65, 1)' offset='0%25'%3E%3C/stop%3E%3Cstop id='stop2' stop-color='rgba(212, 65, 65, 1)' offset='100%25'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23sw-gradient)' d='M19.6,-23.3C24.8,-19,28,-12.2,30.7,-4.3C33.4,3.6,35.6,12.7,32.6,19.7C29.6,26.7,21.4,31.6,13.3,33.2C5.1,34.9,-3.2,33.2,-9.9,29.7C-16.7,26.2,-21.9,20.9,-27.2,14.4C-32.5,7.9,-37.8,0.1,-37.1,-6.9C-36.3,-14,-29.4,-20.4,-22.2,-24.3C-15,-28.3,-7.5,-29.8,-0.1,-29.6C7.2,-29.5,14.4,-27.6,19.6,-23.3Z' width='100%25' height='100%25' transform='translate(50 50)' stroke-width='0' style='transition: all 0.3s ease 0s;' stroke='url(%23sw-gradient)'%3E%3C/path%3E%3C/svg%3E");
      background-size: 90%;
    }
  }
  @media (max-width: 1540px) {
    .container {
      justify-content: flex-start;
      padding-top: 120px;
    }
  }
  @media (max-width: 1280px) {
    padding-top: 160px;
  }
  @media (max-width: 1024px) {
    .container {
      padding-top: 0;
    }
  }
`;

const Wrap = styled.div`
  max-width: 810px;
  width: 100%;
  padding-bottom: 20px;
  h3 {
    padding-bottom: 20px;
    font-size: ${(props) => props.theme.fontSize.xl};
    font-weight: bold;
  }
  .title {
    padding-bottom: 8px;
    font-size: ${(props) => props.theme.fontSize.md};
    font-weight: bold;
  }
  .content {
    padding-bottom: 4px;
    font-size: ${(props) => props.theme.fontSize.md};
    line-height: 1.2;
  }
`;

function Introduce() {
  return (
    <Wrap>
      <h3>문의</h3>
      <p className="title">art_1995@daum.net</p>
      <p className="content">
        메일을 보내주시면 평일 기준 3일 내로 답장을 드리겠습니다.
      </p>
    </Wrap>
  );
}

function Contect() {
  return (
    <ContectWrap>
      <HeadTitle text="Contect" className="title" />
      <Container className="container">
        <Introduce />
      </Container>
    </ContectWrap>
  );
}

export default Contect;
