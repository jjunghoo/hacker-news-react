import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { getStories } from "../service/hackerNewsAPI";
import { Banner } from "./Banner";
import { Story } from "./Story";

const WrapDiv = styled.ul`
  height: 83vh;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Ask = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStories("ask").then((ids) =>
      setStoryIds(ids.map((data) => (data = { id: data, menuType: "ask" })))
    );
  }, []);
  // console.log(storyIds);
  return (
    <WrapDiv>
      <Banner>ASK</Banner>
      <ul>
        {storyIds.slice(0, 29).map((storyId, i) => (
          <Story key={i} storyId={storyId} />
        ))}
      </ul>
    </WrapDiv>
  );
};
