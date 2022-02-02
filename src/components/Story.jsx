import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { mapTime } from "../mappers/mapTimes";
import { getStory } from "../service/hackerNewsAPI";

const Li = styled.li`
  border-top: 1px solid #e8e8ed;
  padding: 20px;
  & .source {
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
  }, [storyId]);
  // console.log(story);
  const { title, score, by, time, descendants, kids, url } = story;

  return (
    <Li>
      {url && (
        <div className="source">
          <b>{url.split("/")[2].toUpperCase()}</b>
        </div>
      )}
      <a href={url} rel="noopener noreferrer" target="_blank">
        <p>{title}</p>
      </a>
      <div>
        <span>
          {score} points{" "}
          <Link
            to={`/user/${by}`}
            style={{ textDecoration: "none", color: "#6b6b6b" }}
          >
            <b>by {by}</b>
          </Link>
        </span>
        <br />
        <span>
          {mapTime(time)} ago {descendants} comments
        </span>
      </div>
    </Li>
  );
};
