import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { getStories } from "../service/hackerNewsAPI";
import { Banner } from "./Banner";
import { Story } from "./Story";

const WrapDiv = styled.ul`
  height: 610px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Top = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStories("top").then((ids) =>
      setStoryIds(ids.map((data) => (data = { id: data, menuType: "top" })))
    );
  }, []);
  // console.log(storyIds);
  return (
    <WrapDiv>
      <Banner>TOP</Banner>
      <ul>
        {storyIds.slice(0, 29).map((storyId, i) => (
          <Story key={i} storyId={storyId} />
        ))}
      </ul>
    </WrapDiv>
  );
};
