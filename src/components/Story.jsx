import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { mapTime } from "../mappers/mapTimes";
import { getStory } from "../service/hackerNewsAPI";
import { useMediaQuery } from "react-responsive";

const Li = styled.li`
  border-top: 1px solid #e8e8ed;
  padding: 20px;
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  .storyIndex {
    position: absolute;
    font-size: xx-large;
    top: 29px;
    left: -50px;
    color: #666;
  }
  & .source {
    border: 1px solid rgba(144, 144, 144, 1);
    border-radius: 12.5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 10px;
    width: max-content;
    font-size: 10px;
    font-weight: 700;
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
    line-height: 17.6px;
  }
  span {
    font-size: 10px;
    color: #6b6b6b;
    b {
      font-weight: 700;
    }
  }
`;

export const Story = ({ storyId, index }) => {
  const [story, setStory] = useState([]);
  let menuType = storyId.menuType;
  if (menuType === "job") menuType = "jobs";

  const isMobileAndTablet = useMediaQuery({
    query: "(min-width:320px) and (max-width:1399px)"
  });

  useEffect(() => {
    getStory(storyId.id).then((data) => setStory(data));
  }, [storyId]);

  const { title, score, by, time, descendants, kids, url, id } = story;

  return (
    <Li style={{ padding: isMobileAndTablet ? "20px" : "7px" }}>
      {url && (
        <>
          {!isMobileAndTablet && <div className="storyIndex">{index + 1}</div>}
          <div
            className="source"
            style={
              isMobileAndTablet
                ? { padding: "6px 10px" }
                : { paddingLeft: "1px", border: "none" }
            }
          >
            <b>{url.split("/")[2].toUpperCase()}</b>
          </div>
        </>
      )}
      {url ? (
        <a href={url} rel="noopener noreferrer" target="_blank">
          <p>{title}</p>
        </a>
      ) : (
        <Link
          to={`/${menuType}/${id}`}
          state={kids}
          style={{ textDecoration: "none", color: "#6b6b6b" }}
        >
          <p>{title}</p>
        </Link>
      )}
      <div style={{ display: isMobileAndTablet ? "block" : "flex" }}>
        <span style={{ marginRight: isMobileAndTablet ? "0" : "7px" }}>
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
          {mapTime(time)} ago {descendants}&nbsp;
          <Link
            to={`/${menuType}/${id}/comment`}
            state={kids}
            style={{ textDecoration: "none", color: "#6b6b6b" }}
          >
            comments
          </Link>
        </span>
      </div>
    </Li>
  );
};
