import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { getStories } from "../service/hackerNewsAPI";
import { Banner } from "./Banner";
import { Story } from "./Story";
import { useMediaQuery } from "react-responsive";

const WrapDiv = styled.ul`
  height: 85.5vh;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Show = () => {
  const [storyIds, setStoryIds] = useState([]);

  const isMobileAndTablet = useMediaQuery({
    query: "(min-width:320px) and (max-width:1399px)"
  });

  useEffect(() => {
    getStories("show").then((ids) =>
      setStoryIds(ids.map((data) => (data = { id: data, menuType: "show" })))
    );
  }, []);

  return (
    <WrapDiv style={{ height: isMobileAndTablet ? "85.5vh" : "88.5vh" }}>
      <Banner>SHOW</Banner>
      <ul>
        {storyIds.slice(0, 29).map((storyId, i) => (
          <Story key={i} storyId={storyId} />
        ))}
      </ul>
    </WrapDiv>
  );
};
