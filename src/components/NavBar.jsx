import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
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
  .active {
    div {
      filter: invert(44%) sepia(22%) saturate(5164%) hue-rotate(357deg)
        brightness(98%) contrast(102%);
    }
  }
  p {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 400;
  }
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
// activeStyle={activeStyle}
export const NavBar = () => {
  return (
    <Nav>
      <IconWrap>
        <NavLink to="/Top">
          <Icon>
            <img src={topIcon} alt="Top 아이콘 이미지" />
            <p>Top</p>
          </Icon>
        </NavLink>
      </IconWrap>
      <IconWrap>
        <NavLink to="/New">
          <Icon>
            <img src={newIcon} alt="Top 아이콘 이미지" />
            <p>New</p>
          </Icon>
        </NavLink>
      </IconWrap>
      <IconWrap>
        <NavLink to="/Ask">
          <Icon>
            <img src={askIcon} alt="Top 아이콘 이미지" />
            <p>Ask</p>
          </Icon>
        </NavLink>
      </IconWrap>
      <IconWrap>
        <NavLink to="/Show">
          <Icon>
            <img src={showIcon} alt="Top 아이콘 이미지" />
            <p>Show</p>
          </Icon>
        </NavLink>
      </IconWrap>
      <IconWrap>
        <NavLink to="/Jobs">
          <Icon>
            <img src={jobsIcon} alt="Top 아이콘 이미지" />
            <p>Jobs</p>
          </Icon>
        </NavLink>
      </IconWrap>
    </Nav>
  );
};
