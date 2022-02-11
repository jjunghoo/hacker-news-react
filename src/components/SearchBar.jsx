import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

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
  const isTablet = useMediaQuery({
    query: "(min-width:1024px) and (max-width:1399px)"
  });

  const isMobile = useMediaQuery({
    query: "(min-width:320px) and (max-width:1023px)"
  });

  return (
    <SearchWrap
      style={{
        padding: isMobile ? "10px 22px" : isTablet ? "15px 22px" : "26px 22px"
      }}
    >
      <LogoAndTitle>
        <Link to="/">
          <img
            src="https://rawcdn.githack.com/jjunghoo/hacker-news-react/7733082f606483f0751f021fadd3a0350db6c7fb/src/images/homeIcon.png"
            alt="아이콘 로고 이미지"
            style={{ width: isMobile ? "20px" : "3vh" }}
          />
        </Link>
        <span
          style={
            isMobile
              ? { fontSize: "12px" }
              : { width: "fit-content", fontSize: "xx-large" }
          }
        >
          svelte hacker news
        </span>
      </LogoAndTitle>
      <SearchImg>
        <img
          src="https://uploads.codesandbox.io/uploads/user/0a2c400d-2472-4c35-baba-0c0c77df8e4e/CxNx-searchImg1.png"
          alt="검색 이미지"
        />
        <img
          src="https://uploads.codesandbox.io/uploads/user/0a2c400d-2472-4c35-baba-0c0c77df8e4e/etjL-searchImg2.png"
          alt="검색 이미지"
        />
      </SearchImg>
    </SearchWrap>
  );
};
