import { useEffect, useState } from "react";
import { getStories } from "../service/hackerNewsAPI";
import { Banner } from "./Banner";
import { Story } from "./Story";

export const Top = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStories("top").then((ids) => setStoryIds(ids));
  }, []);
  // console.log(storyIds);
  return (
    <>
      <Banner>TOP</Banner>
      <ul>
        {storyIds.slice(0, 4).map((storyId, i) => (
          <Story key={i} storyId={storyId} />
        ))}
      </ul>
    </>
  );
};
