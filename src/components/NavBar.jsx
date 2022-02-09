import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import NewIcon from "../images/newIcon.png";
import TopIcon from "../images/topIcon.png";
import AskIcon from "../images/askIcon.png";
import ShowIcon from "../images/showIcon.png";
import JobsIcon from "../images/jobsIcon.png";
import { useMediaQuery } from "react-responsive";

const Nav = styled.nav`
  width: 100%;
  /* display: flex; */
  justify-content: space-around;
  border-top: 1px solid #e8e8ed;
  padding: 0 0px 32px;
  position: absolute;
  bottom: 1px;
  background: rgba(255, 255, 255, 1);
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
    padding: 3px 14px 12px;
    p {
      position: absolute;
      bottom: -1.5px;
      left: 10px;
    }
  }
  :nth-of-type(2) {
    padding: 5px 17px 15px;
    p {
      position: absolute;
      bottom: -5px;
      left: 6px;
    }
  }
  :nth-of-type(3) {
    padding: 7px 20.27px 16.27px 18px;
    p {
      position: absolute;
      bottom: -6px;
      left: 6px;
    }
  }
  :nth-of-type(4) {
    padding: 3px 16px 15px;
    p {
      position: absolute;
      bottom: -5px;
      left: 4px;
    }
  }
  :last-child {
    padding: 6px 20px 20px;
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

const desctopNav = {
  display: "flex",
  position: "absolute",
  top: "8px",
  height: "fit-content",
  padding: "0",
  justifyContent: "center",
  width: "fit-content",
  right: "206px",
  borderTop: "none"
};

const menuName = [
  { name: "Top", image: TopIcon },
  { name: "New", image: NewIcon },
  { name: "Ask", image: AskIcon },
  { name: "Show", image: ShowIcon },
  { name: "Jobs", image: JobsIcon }
];

export const NavBar = () => {
  const isMobileAndTablet = useMediaQuery({
    query: "(min-width:320px) and (max-width:1399px)"
  });

  return (
    <Nav style={isMobileAndTablet ? { display: "flex" } : desctopNav}>
      {menuName.map((item) => (
        <IconWrap key={item.name}>
          <NavLink to={`/${item.name}`}>
            <Icon
              style={
                isMobileAndTablet ? { padding: "0px" } : { padding: "0 20px" }
              }
            >
              <img
                src={`${item.image}`}
                alt={`${item.name} 아이콘 이미지`}
                style={{ opacity: isMobileAndTablet ? "1" : "0" }}
              />
              <p style={{ fontSize: isMobileAndTablet ? "8.5px" : "xx-large" }}>
                {item.name}
              </p>
            </Icon>
          </NavLink>
        </IconWrap>
      ))}
    </Nav>
  );
};
