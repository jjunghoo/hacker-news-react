import { useEffect, useState } from "react";
import { getStories } from "../service/hackerNewsAPI";
import { Banner } from "./Banner";
import { Story } from "./Story";

export const Show = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStories("show").then((ids) => setStoryIds(ids));
  }, []);
  // console.log(storyIds);
  return (
    <>
      <Banner>SHOW</Banner>
      <ul>
        {storyIds.slice(0, 4).map((storyId, i) => (
          <Story key={i} storyId={storyId} />
        ))}
      </ul>
    </>
  );
};
