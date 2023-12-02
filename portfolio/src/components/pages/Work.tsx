import styled from "styled-components";
import HeadTitle from "../atom/HeadTitle";
import Container from "../layout/Container";
import workData from "../../data/work.json";
import { Link } from "react-router-dom";

const WorkWrap = styled.div`
  .container {
    min-height: calc(100vh - 60px);
    height: 100%;
    padding-top: 100px;
    padding-left: 350px;
    justify-content: flex-end;
    height: 100%;
  }
  .title {
    &::after {
      transform: translate(-53%, -57%) rotate(177deg);
      background-image: url("data:image/svg+xml,%3C!--%3Fxml version='1.0' standalone='no'%3F--%3E%3Csvg id='sw-js-blob-svg' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='sw-gradient' x1='0' x2='1' y1='1' y2='0'%3E%3Cstop id='stop1' stop-color='rgba(212, 65, 65, 1)' offset='0%25'%3E%3C/stop%3E%3Cstop id='stop2' stop-color='rgba(212, 65, 65, 1)' offset='100%25'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23sw-gradient)' d='M28.5,-30.7C36.5,-27.2,42.4,-17.8,42.8,-8.6C43.2,0.7,38.2,9.9,32,16.4C25.8,22.9,18.4,26.7,10.3,30.5C2.2,34.4,-6.6,38.4,-15,37.1C-23.4,35.8,-31.3,29.2,-35.2,21C-39.1,12.8,-38.9,3,-36,-5.1C-33.1,-13.2,-27.5,-19.6,-21,-23.4C-14.5,-27.1,-7.3,-28.3,1.5,-30C10.2,-31.8,20.4,-34.1,28.5,-30.7Z' width='100%25' height='100%25' transform='translate(50 50)' stroke-width='0' style='transition: all 0.3s ease 0s;' stroke='url(%23sw-gradient)'%3E%3C/path%3E%3C/svg%3E");
      background-size: 90%;
    }
  }
  @media (max-width: 1540px) {
    .container {
      justify-content: flex-start;
      padding-top: 120px;
      padding-left: 100px;
    }
  }
  @media (max-width: 1024px) {
    .container {
      padding-top: 0;
      padding-left: 80px;
    }
  }
  @media (max-width: 800px) {
    .container {
      padding-left: 40px;
    }
  }
`;

const ListWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 40px;
  li {
    width: calc(100% / 3 - 40px);
    img {
      width: 100%;
    }
    a {
      display: block;
      position: relative;
      .hover-active {
        display: none;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        span {
          color: ${(props) => props.theme.colors.white};
          font-size: ${(props) => props.theme.fontSize.md};
        }
      }
      &:hover .hover-active {
        display: flex;
      }
    }
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    li {
      width: 100%;
    }
  }
`;

function WorkList() {
  return (
    <ListWrap>
      {workData.work
        .slice()
        .reverse()
        .map((work) => (
          <li key={work.id}>
            <Link to={`/work/${work.title}`}>
              <img src={work.mainImg} alt={work.title} />
              <div className="hover-active">
                <span>{work.title}</span>
              </div>
            </Link>
          </li>
        ))}
    </ListWrap>
  );
}

function Work() {
  return (
    <WorkWrap>
      <HeadTitle text="WORK" className="title" />
      <Container className="container">
        <WorkList />
      </Container>
    </WorkWrap>
  );
}

export default Work;
