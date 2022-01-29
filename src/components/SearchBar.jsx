import styled from "@emotion/styled";

const SearchWrap = styled.div`
  border-bottom: 1px solid #ff6600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
`;

const LogoAndTitle = styled.div`
  display: flex;
  align-items: center;
  span {
    width: min-content;
    font-size: 12px;
    line-height: 10px;
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
  return (
    <SearchWrap>
      <LogoAndTitle>
        <img
          src={require("../images/icon_logo.png")}
          alt="아이콘 로고 이미지"
        />
        <span>svelte hacker news</span>
      </LogoAndTitle>
      <SearchImg>
        <img src={require("../images/searchImg1.png")} alt="검색 이미지" />
        <img src={require("../images/searchImg2.png")} alt="검색 이미지" />
      </SearchImg>
    </SearchWrap>
  );
};
