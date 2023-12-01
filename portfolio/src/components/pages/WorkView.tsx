import styled from "styled-components";
import Container from "../layout/Container";
import Button from "../atom/Button";

const WorkViewWrap = styled.div`
  .description-box {
    justify-content: space-between;
    flex-direction: row-reverse;
    padding-top: 80px;
    > * {
      width: calc(100% / 2 - 40px);
    }

    @media (max-width: 800px) {
      justify-content: center;
      flex-direction: column;
      padding-top: 40px;
      > * {
        width: 100%;
      }
    }
  }
`;

const Title = styled.div`
  width: 100vw;
  padding: 60px 80px;
  background-color: ${(props) => props.theme.colors.point};
  color: ${(props) => props.theme.colors.white};
  h2 {
    font-size: 40px;
    font-weight: 900;
    font-family: "GmarketSansMedium";
    letter-spacing: -0.4px;
  }
  @media (max-width: 800px) {
    padding: 40px 20px;
    font-size: 32px;
  }
`;
const Describtion = styled.ul`
  position: sticky;
  top: 20px;
  height: fit-content;
  .title {
    display: flex;
    align-items: flex-end;
    padding-bottom: 6px;
    h3 {
      font-size: ${(props) => props.theme.fontSize.xl};
      font-weight: bold;
    }
    p {
      padding-left: 6px;
      color: ${(props) => props.theme.colors.fontLightGrey};
      font-size: ${(props) => props.theme.fontSize.xs};
    }
  }
  .skill {
    margin-bottom: 4px;
    font-size: ${(props) => props.theme.fontSize.sm};
    color: ${(props) => props.theme.colors.fontGrey};
    div {
      display: flex;
      align-items: center;
    }
    p {
      width: 46px;
      padding-bottom: 2px;
      font-weight: bold;
    }
    b {
      font-weight: bold;
    }
  }
  .description {
    margin-bottom: 18px;
    font-size: ${(props) => props.theme.fontSize.md};
    p {
      line-height: 1.2;
    }
  }
  .nav {
    display: flex;
    gap: 6px;
    padding-bottom: 40px;
  }
  @media (max-width: 800px) {
    position: relative;
    top: unset;
  }
`;
const ImgBoxWrap = styled.div`
  box-sizing: border-box;
  > * {
    margin-bottom: 12px;
    img {
      width: 100%;
    }
  }
`;

function DescribtionEl() {
  return (
    <Describtion>
      <li className="title">
        <h3>Title</h3>
        <p>subTitle</p>
      </li>
      <li className="skill">
        <div>
          <p>기여도</p>
          <span>
            <b>|</b> 퍼블리싱80%
          </span>
        </div>
        <div>
          <p>SKILL</p>
          <span>
            <b>|</b> HTML5 SCSS Javascript
          </span>
        </div>
      </li>
      <li className="description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          ipsum itaque ratione! Veritatis vitae provident illum similique
          dolores nemo, cum laborum accusamus velit consequuntur sint iste iusto
          harum, veniam eligendi?
        </p>
      </li>
      <li className="nav">
        <Button text="GO BACK" />
        <Button text="VISIT SITE" />
      </li>
    </Describtion>
  );
}

function ImageEl() {
  return (
    <ImgBoxWrap>
      <div>
        <img src="https://art-1995.github.io/img/ziqnft1.png" />
      </div>
      <div>
        <img src="https://art-1995.github.io/img/ziqnft1.png" />
      </div>
    </ImgBoxWrap>
  );
}

function WorkView() {
  return (
    <WorkViewWrap>
      <Title>
        <h2>This is Test</h2>
      </Title>
      <Container className="description-box">
        <DescribtionEl />
        <ImageEl />
      </Container>
    </WorkViewWrap>
  );
}

export default WorkView;
