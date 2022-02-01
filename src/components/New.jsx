import { useEffect, useState } from "react";
import { getStories } from "../service/hackerNewsAPI";
import { Banner } from "./Banner";
import { Story } from "./Story";

export const New = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStories("new").then((ids) => setStoryIds(ids));
  }, []);
  // console.log(storyIds);
  return (
    <>
      <Banner>NEW</Banner>
      <ul>
        {storyIds.slice(0, 4).map((storyId, i) => (
          <Story key={i} storyId={storyId} />
        ))}
      </ul>
    </>
  );
};
