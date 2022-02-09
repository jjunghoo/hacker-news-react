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

export const Jobs = () => {
  const [storyIds, setStoryIds] = useState([]);

  const isMobileAndTablet = useMediaQuery({
    query: "(min-width:320px) and (max-width:1399px)"
  });

  useEffect(() => {
    getStories("job").then((ids) =>
      setStoryIds(ids.map((data) => (data = { id: data, menuType: "job" })))
    );
  }, []);

  return (
    <WrapDiv style={{ height: isMobileAndTablet ? "85.5vh" : "88.5vh" }}>
      <Banner>JOBS</Banner>
      <ul>
        {storyIds.slice(0, 29).map((storyId, i) => (
          <Story key={i} storyId={storyId} />
        ))}
      </ul>
    </WrapDiv>
  );
};
