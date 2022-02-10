import styled from "@emotion/styled";
import { memo, useEffect, useState } from "react";
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

const MoreDiv = styled.div`
  width: fit-content;
  margin: 25px auto;
  font-size: x-large;
  cursor: pointer;
`;

export const Ask = memo(() => {
  const [storyIds, setStoryIds] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const isMobileAndTablet = useMediaQuery({
    query: "(min-width:320px) and (max-width:1399px)"
  });

  useEffect(() => {
    getStories("ask").then((ids) =>
      setStoryIds(ids.map((data) => (data = { id: data, menuType: "ask" })))
    );
  }, []);
  console.log(startIndex);
  return (
    <WrapDiv style={{ height: isMobileAndTablet ? "85.5vh" : "88.5vh" }}>
      <Banner style={{ display: isMobileAndTablet ? "block" : "none" }}>
        TOP
      </Banner>
      <ul style={{ margin: isMobileAndTablet ? "0" : "0 23%" }}>
        {isMobileAndTablet
          ? storyIds
              .slice(startIndex * 10, startIndex * 10 + 10)
              .map((storyId, i) => <Story key={i} storyId={storyId} />)
          : storyIds
              .slice(startIndex * 10, startIndex * 10 + 10)
              .map((storyId, i) => (
                <Story key={i} storyId={storyId} index={startIndex * 10 + i} />
              ))}
      </ul>
      <MoreDiv onClick={() => setStartIndex(startIndex + 1)}>more</MoreDiv>
    </WrapDiv>
  );
});
