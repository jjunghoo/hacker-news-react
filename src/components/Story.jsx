import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getStory } from "../service/hackerNewsAPI";

const Li = styled.li`
  border: 1px solid black;
  padding: 20px;
  & div {
    :first-of-type {
      border: 1px solid rgba(144, 144, 144, 1);
      border-radius: 12.5px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 6px 10px;
      width: min-content;
      font-size: 10px;
      b {
        color: #909090;
        font-weight: bold;
      }
    }
  }
  p {
    display: inline-block;
    margin: 10px 0;
    font-weight: 800;
    color: #000000;
  }
  span {
    font-size: 10px;
    color: #6b6b6b;
    b {
      font-weight: 700;
    }
  }
`;

export const Story = ({ storyId }) => {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId).then((data) => setStory(data));

    return () => {
      setStory([]);
    };
  }, []);
  console.log(story);
  const { title, score, by, kids, url } = story;

  return (
    <Li>
      <div>
        <b>{url && url.split("/")[2].toUpperCase()}</b>
      </div>
      <a href={url} rel="noopener noreferrer" target="_blank">
        <p>{title}</p>
      </a>
      <div>
        <span>
          {score} points <b>by {by}</b>
        </span>
        <br />
        <span>1 d ago {kids && kids.length} comments</span>
      </div>
    </Li>
  );
};
