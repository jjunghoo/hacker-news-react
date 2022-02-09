import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import homeIcon from "../images/homeIcon.png";
import searchImg1 from "../images/searchImg1.png";
import searchImg2 from "../images/searchImg2.png";

const SearchWrap = styled.div`
  border-bottom: 1px solid #ff6600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 22px;
`;

const LogoAndTitle = styled.div`
  display: flex;
  align-items: center;
  span {
    width: min-content;
    font-size: 12px;
    line-height: 10px;
    margin-left: 10px;
    font-family: "Roboto";
    font-weight: 400;
    color: rgba(95, 95, 95, 1);
  }
`;

const SearchImg = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  img {
    position: absolute;
    :first-of-type {
      top: 3px;
      left: 4px;
    }
    :last-child {
      top: 16.5px;
      right: 2px;
    }
  }
`;

export const SearchBar = () => {
  const isMobileAndTablet = useMediaQuery({
    query: "(min-width:320px) and (max-width:1399px)"
  });

  return (
    <SearchWrap
      style={{ padding: isMobileAndTablet ? "10px 22px" : "20px 22px" }}
    >
      <LogoAndTitle>
        <Link to="/">
          <img
            src={homeIcon}
            alt="아이콘 로고 이미지"
            style={{ width: isMobileAndTablet ? "20px" : "3vh" }}
          />
        </Link>
        <span
          style={
            isMobileAndTablet
              ? { fontSize: "12px" }
              : { width: "fit-content", fontSize: "xx-large" }
          }
        >
          svelte hacker news
        </span>
      </LogoAndTitle>
      <SearchImg>
        <img src={searchImg1} alt="검색 이미지" />
        <img src={searchImg2} alt="검색 이미지" />
      </SearchImg>
    </SearchWrap>
  );
};
