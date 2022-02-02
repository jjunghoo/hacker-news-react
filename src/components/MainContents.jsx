import { useEffect, useState } from "react";
import { getStories } from "../service/hackerNewsAPI";
import { CategoryStory } from "./CategoryStory";
import { MainBanner } from "./MainBanner";

export const MainContents = ({ attribute }) => {
  const [menuByStory, setMenuByStrory] = useState([]);

  let { category } = attribute;
  if (category === "jobs") category = "job";

  useEffect(() => {
    getStories(category).then((data) => setMenuByStrory(data.slice(0, 5)));

    return () => {
      getStories(attribute.category);
    };
  }, [attribute.category, category]);

  return (
    <>
      <MainBanner attribute={attribute} />
      <ul>
        {menuByStory.map((categoryData) => (
          <CategoryStory key={categoryData} categoryData={categoryData} />
        ))}
      </ul>
    </>
  );
};
