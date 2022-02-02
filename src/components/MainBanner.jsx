import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const MainBannerDiv = styled.div`
  margin-bottom: 10px;
  padding: 16px 16.04px 15.04px 19px;
  /* border: 1px solid black; */
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background: rgba(253, 97, 6, 1); */
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  .bannerText {
    color: rgba(255, 255, 255, 1);
    span {
      font-size: 20px;
      font-weight: 700;
    }
    p {
      font-size: 10px;
      font-weight: 300;
    }
  }
  .more {
    /* border: 1px solid black; */
    border-radius: 121px;
    padding: 9px 20px;
    background: rgba(255, 255, 255, 1);
    color: rgba(253, 97, 6, 1);
    p {
      font-size: 14px;
      font-weight: 400;
    }
  }
`;

export const MainBanner = ({ attribute }) => {
  const { category, text, background } = attribute;
  return (
    <MainBannerDiv style={{ backgroundColor: background }}>
      <div className="bannerText">
        <span>{category.toUpperCase()} 5</span>
        <p>{text}</p>
      </div>
      <Link to={`/${category}`} style={{ textDecoration: "none" }}>
        <div className="more">
          <p style={{ color: background }}>More</p>
        </div>
      </Link>
    </MainBannerDiv>
  );
};
