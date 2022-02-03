import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { getStories } from "../service/hackerNewsAPI";
import { Banner } from "./Banner";
import { Story } from "./Story";

const Ul = styled.ul`
  height: 610px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const New = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStories("new").then((ids) =>
      setStoryIds(ids.map((data) => (data = { id: data, menuType: "new" })))
    );
  }, []);
  // console.log(storyIds);
  return (
    <>
      <Banner>NEW</Banner>
      <Ul>
        {storyIds.slice(0, 29).map((storyId, i) => (
          <Story key={i} storyId={storyId} />
        ))}
      </Ul>
    </>
  );
};
