import styled from "styled-components";
import HeadTitle from "../atom/HeadTitle";
import Container from "../layout/Container";

const AboutWrap = styled.div`
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
      transform: translate(-57%, -55%) rotate(170deg);
      background-image: url("data:image/svg+xml,%3C!--%3Fxml version='1.0' standalone='no'%3F--%3E%3Csvg id='sw-js-blob-svg' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='sw-gradient' x1='0' x2='1' y1='1' y2='0'%3E%3Cstop id='stop1' stop-color='rgba(212, 65, 65, 1)' offset='0%25'%3E%3C/stop%3E%3Cstop id='stop2' stop-color='rgba(212, 65, 65, 1)' offset='100%25'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23sw-gradient)' d='M28.2,-33.9C35.7,-27.4,40.1,-17.6,40.9,-7.9C41.8,1.8,39,11.4,33.8,18.6C28.5,25.8,20.7,30.6,12.7,32.6C4.6,34.6,-3.7,33.8,-12.5,31.8C-21.3,29.7,-30.7,26.4,-36.8,19.5C-42.8,12.5,-45.7,2,-42.3,-5.8C-39,-13.6,-29.4,-18.6,-21.3,-24.9C-13.2,-31.2,-6.6,-38.7,1.9,-41C10.4,-43.3,20.8,-40.3,28.2,-33.9Z' width='100%25' height='100%25' transform='translate(50 50)' stroke-width='0' style='transition: all 0.3s ease 0s;' stroke='url(%23sw-gradient)'%3E%3C/path%3E%3C/svg%3E");
      background-size: 90%;
    }
  }
  @media (max-width: 1540px) {
    .container {
      justify-content: flex-start;
      padding-top: 120px;
    }
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
  .sub-content {
    font-size: ${(props) => props.theme.fontSize.xs};
    letter-spacing: -0.4px;
  }
  b {
    font-weight: bold;
  }
  .date {
    padding-bottom: 4px;
    font-size: ${(props) => props.theme.fontSize.sm};
  }
  &.career {
    li {
      padding-bottom: 12px;
    }
  }
  &.license {
    .title {
      padding-bottom: 4px;
    }
    > div {
      display: flex;
    }
    ul:last-child {
      margin-left: 180px;
      padding-left: 180px;
      border-left: 1px solid #e5e5e5;
    }
    li {
      padding-bottom: 12px;
    }
  }
  @media (max-width: 800px) {
    &.license {
      > div {
        flex-direction: column;
      }
      ul:last-child {
        width: fit-content;
        margin: 0;
        padding: 0;
        border: 0;
        margin-top: 10px;
        padding-top: 22px;
        border-top: 1px solid #e5e5e5;
      }
    }
  }
`;

function Introduce() {
  return (
    <Wrap>
      <h3>소개</h3>
      <p className="title">정서린 SEO-LYNN JEONG</p>
      <p className="content">
        저는 2년 차 웹퍼블리셔(마크업 개발자) 입니다. <br />
        단단한 구조를 설계해 감각적인 UI를 입혀 유지 보수에 최적화된 코드를
        그려냅니다.
        <br />웹 표준, 웹 접근성에 관심이 있으며 더욱 탄탄하고 역동적인 UI를
        만들기 위해 학습을 병행하며 발전해나가고 있습니다.
      </p>
      <p className="sub-content">
        <b>SKILLS_</b> HTML5, CSS, SCSS(SASS), Javascript, jQuery, React, Figma,
        Photoshop, illustrator, Premier Pro, Affter Effects
      </p>
    </Wrap>
  );
}

function Career() {
  return (
    <Wrap className="career">
      <h3>경력</h3>
      <ul>
        <li>
          <p className="date">2021.07~2022.09</p>
          <p className="title">
            (주)디벨록 정보전산실 프론트엔드 디자이너 주임
          </p>
          <p className="sub-content">퍼블리싱 + 디자인</p>
        </li>
        <li>
          <p className="date">2022.09~2023.07</p>
          <p className="title">(주)패스트뷰 개발기획팀 매니저</p>
          <p className="sub-content">퍼블리싱</p>
        </li>
      </ul>
    </Wrap>
  );
}

function License() {
  return (
    <Wrap className="license">
      <h3>학력 / 자격증</h3>
      <div>
        <ul>
          <li>
            <p className="date">2019.03~2021.03</p>
            <p className="title">미술학과</p>
            <p className="sub-content">충남대학교 일반대학원</p>
          </li>
          <li>
            <p className="date">2014.03~2019.02</p>
            <p className="title">회화과 한국화전공</p>
            <p className="sub-content">충남대학교</p>
          </li>
        </ul>
        <ul>
          <li>
            <p className="date">2016.09</p>
            <p className="title">Adobe illustrator</p>
            <p className="sub-content">ADOBE</p>
          </li>
          <li>
            <p className="date">2016.02</p>
            <p className="title">GTQ포토샵1급</p>
            <p className="sub-content">한국생산성본부(KPC)</p>
          </li>
        </ul>
      </div>
    </Wrap>
  );
}

function About() {
  return (
    <AboutWrap>
      <HeadTitle text="ABOUT" className="title" />
      <Container className="container">
        <Introduce />
        <Career />
        <License />
      </Container>
    </AboutWrap>
  );
}

export default About;
