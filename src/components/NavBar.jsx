import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Nav = styled.nav`
  width: 100%;
  justify-content: space-around;
  border-top: 1px solid #e8e8ed;
  position: absolute;
  bottom: 0px;
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
    padding: 3px 14px 0px;
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
  left: "600px",
  borderTop: "none",
  backgroundColor: "transparent"
};

const menuName = [
  {
    name: "Top",
    image:
      "https://uploads.codesandbox.io/uploads/user/0a2c400d-2472-4c35-baba-0c0c77df8e4e/y7Sq-topIcon.png"
  },
  {
    name: "New",
    image:
      "https://rawcdn.githack.com/jjunghoo/hacker-news-react/7733082f606483f0751f021fadd3a0350db6c7fb/src/images/newIcon.png"
  },
  {
    name: "Ask",
    image:
      "https://uploads.codesandbox.io/uploads/user/0a2c400d-2472-4c35-baba-0c0c77df8e4e/mI-T-askIcon.png"
  },
  {
    name: "Show",
    image:
      "https://uploads.codesandbox.io/uploads/user/0a2c400d-2472-4c35-baba-0c0c77df8e4e/MPrP-showIcon.png"
  },
  {
    name: "Jobs",
    image:
      "https://uploads.codesandbox.io/uploads/user/0a2c400d-2472-4c35-baba-0c0c77df8e4e/j1mn-jobsIcon.png"
  }
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
                isMobileAndTablet ? { padding: "0px" } : { padding: "0 40px" }
              }
            >
              <img
                src={`${item.image}`}
                alt={`${item.name} 아이콘 이미지`}
                style={{ opacity: isMobileAndTablet ? "1" : "0" }}
              />
              <p style={{ fontSize: isMobileAndTablet ? "8.5px" : "x-large" }}>
                {item.name}
              </p>
            </Icon>
          </NavLink>
        </IconWrap>
      ))}
    </Nav>
  );
};
