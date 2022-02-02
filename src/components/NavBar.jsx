import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import newIcon from "../images/newIcon.png";
import topIcon from "../images/topIcon.png";
import askIcon from "../images/askIcon.png";
import showIcon from "../images/showIcon.png";
import jobsIcon from "../images/jobsIcon.png";

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px solid #e8e8ed;
  padding: 0 8px 32px;
  position: absolute;
  bottom: 1px;
`;

const IconWrap = styled.div`
  :first-of-type {
    padding: 3px 15px 12px;
    p {
      position: absolute;
      bottom: -1.5px;
      left: 10px;
    }
  }
  :nth-of-type(2) {
    padding: 5px 18px 15px;
    p {
      position: absolute;
      bottom: -5px;
      left: 6px;
    }
  }
  :nth-of-type(3) {
    padding: 7px 20.77px 16.77px 19px;
    p {
      position: absolute;
      bottom: -6px;
      left: 6px;
    }
  }
  :nth-of-type(4) {
    padding: 3px 17px 15px;
    p {
      position: absolute;
      bottom: -5px;
      left: 4px;
    }
  }
  :last-child {
    padding: 6px 21px 20px;
    p {
      position: absolute;
      bottom: -10px;
      left: 3.5px;
    }
  }
`;

const Icon = styled.div`
  position: relative;
  font-size: 8.5px;
  color: black;
`;

export const NavBar = () => {
  return (
    <Nav>
      <IconWrap>
        <Link to="/Top">
          <Icon>
            <img src={topIcon} alt="Top 아이콘 이미지" />
            <p>Top</p>
          </Icon>
        </Link>
      </IconWrap>
      <IconWrap>
        <Link to="/New">
          <Icon>
            <img src={newIcon} alt="Top 아이콘 이미지" />
            <p>New</p>
          </Icon>
        </Link>
      </IconWrap>
      <IconWrap>
        <Link to="/Ask">
          <Icon>
            <img src={askIcon} alt="Top 아이콘 이미지" />
            <p>Ask</p>
          </Icon>
        </Link>
      </IconWrap>
      <IconWrap>
        <Link to="/Show">
          <Icon>
            <img src={showIcon} alt="Top 아이콘 이미지" />
            <p>Show</p>
          </Icon>
        </Link>
      </IconWrap>
      <IconWrap>
        <Link to="/Jobs">
          <Icon>
            <img src={jobsIcon} alt="Top 아이콘 이미지" />
            <p>Jobs</p>
          </Icon>
        </Link>
      </IconWrap>
    </Nav>
  );
};
