import styled from "styled-components";
import Container from "../layout/Container";
import Button from "../atom/Button";
import workData from "../../data/work.json";
import { Link, useParams } from "react-router-dom";
import Loading from "../atom/Loading";

const WorkViewWrap = styled.div`
  .description-box {
    justify-content: space-between;
    flex-direction: row-reverse;
    padding-top: 80px;
    > ul:first-child {
      width: 34%;
    }
    > ul:last-child {
      width: 60%;
    }

    @media (max-width: 800px) {
      justify-content: center;
      flex-direction: column;
      padding-top: 40px;
      > * {
        width: 100% !important;
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
    padding: 40px;
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
      word-break: keep-all;
    }
    p {
      width: 46px;
      padding-bottom: 2px;
      font-weight: bold;
    }
    span::before {
      content: "|";
      margin: 0 4px 0 2px;
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
  @media (max-width: 1280px) {
    .skill {
      div {
        flex-direction: column;
        align-items: flex-start;
        padding-bottom: 6px;
      }
      span::before {
        display: none;
      }
    }
  }
  @media (max-width: 800px) {
    position: relative;
    top: unset;
    .skill {
      div {
        align-items: flex-start;
      }
    }
  }
`;
const ImgBoxWrap = styled.ul`
  box-sizing: border-box;
  li {
    margin-bottom: 12px;
    img {
      width: 100%;
      box-shadow: 0 0 20px 0 #e5e5e5;
    }
    &.m-var {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: fit-content;
      }
    }
  }
`;

interface WorkProps {
  work: {
    title?: string;
    subTitle?: string;
    contribution?: string;
    skill?: string;
    description?: string;
    site?: string;
    mainImg?: string;
    imgA?: string;
    imgB?: string;
    imgC?: string;
    imgD?: string;
    mobileImgA?: string;
  };
}

function DescribtionEl({ work }: WorkProps) {
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <Describtion>
      <li className="title">
        <h3>{work.title}</h3>
        <p>{work.subTitle}</p>
      </li>
      <li className="skill">
        <div>
          <p>기여도</p>
          <span>{work.contribution}</span>
        </div>
        <div>
          <p>SKILL</p>
          <span>{work.skill}</span>
        </div>
      </li>
      <li className="description">
        <p>{work.description}</p>
      </li>
      <li className="nav">
        <Button text="GO BACK" onClick={handleGoBack} />
        {work.site && (
          <Link to={work.site} target="_blank">
            <Button text="VISIT SITE" />
          </Link>
        )}
      </li>
    </Describtion>
  );
}

function ImageEl({ work }: WorkProps) {
  return (
    <ImgBoxWrap>
      {work.imgA && (
        <li>
          <img src={work.imgA} alt={work.title} />
        </li>
      )}
      {work.imgB && (
        <li>
          <img src={work.imgB} alt={work.title} />
        </li>
      )}
      {work.imgC && (
        <li>
          <img src={work.imgC} alt={work.title} />
        </li>
      )}
      {work.imgD && (
        <li>
          <img src={work.imgD} alt={work.title} />
        </li>
      )}
      {work.mobileImgA && (
        <li className="m-var">
          <img src={work.mobileImgA} alt={work.title} />
        </li>
      )}
    </ImgBoxWrap>
  );
}

function WorkView() {
  const { title } = useParams();
  const selectedWork = workData.work.find((work) => work.title === title);

  if (!selectedWork) {
    return <Loading />;
  }
  return (
    <WorkViewWrap>
      <Title>
        <h2>{selectedWork.title}</h2>
      </Title>
      <Container className="description-box">
        <DescribtionEl work={selectedWork} />
        <ImageEl work={selectedWork} />
      </Container>
    </WorkViewWrap>
  );
}

export default WorkView;
