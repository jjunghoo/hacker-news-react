import { useEffect, useState } from "react";

import { getStories } from "../service/hackerNewsAPI";
import { Story } from "./Story";
export const Top = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStories().then((ids) => setStoryIds(ids));
  }, []);
  console.log(storyIds);
  return (
    <>
      Top
      <ul>
        {storyIds.slice(0, 4).map((storyId, i) => (
          <Story key={i} storyId={storyId} />
        ))}
      </ul>
    </>
  );
};
