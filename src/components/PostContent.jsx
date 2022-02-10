import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { mapTime } from "../mappers/mapTimes";
import { getStory } from "../service/hackerNewsAPI";
import { Banner } from "./Banner";
import { Comments } from "./Comments";

const WrapDiv = styled.div`
  height: 88.5vh;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const StoryContent = styled.div`
  padding: 20px;
  border: 1px solid #e8e8ed;
  a {
    color: rgba(0, 0, 0, 1);
    text-decoration: none;
  }
  span {
    font-weight: 800;
    font-size: 24px;
    line-height: 26.4px;
  }
  div {
    display: inline-block;
    margin-top: 10px;
    color: rgba(107, 107, 107, 1);
    font-size: 12px;
    line-height: 13.2px;
    font-weight: 400;
    b {
      font-weight: 700;
      color: rgba(107, 107, 107, 1);
    }
  }
`;

const StoryText = styled.p`
  color: rgba(0, 0, 0, 1);
  font-weight: 400;
  font-size: 14px;
  line-height: 19.6px;
  margin-top: 10px;
`;

const BaseLineDiv = styled.div`
  height: 40px;
  background-color: #e5e5e5;
`;

export const PostContent = () => {
  const [story, setStory] = useState([]);
  const params = useParams();
  const { title, text, by, descendants, time, url } = story;

  const commentId = useLocation().state;
  // console.log(commentId);

  useEffect(() => {
    getStory(params.storyId).then((data) => setStory(data));
  }, [params.storyId]);

  return (
    <WrapDiv>
      <Banner>{params.menutype.toUpperCase()}</Banner>
      <StoryContent>
        <a href={url} rel="noreferrer noreferrer" target="_blank">
          <span>{title}</span>
        </a>
        <br />
        <div>
          {mapTime(time)} ago{" "}
          <NavLink to={`/user/${by}`}>
            <b>by {by}</b>
          </NavLink>
        </div>
        <br />
        <StoryText dangerouslySetInnerHTML={{ __html: text }}></StoryText>
        <br />
        <div>{descendants} comment</div>
      </StoryContent>
      <BaseLineDiv />
      <Comments commentId={commentId} storyId={Number(params.storyId)} />
    </WrapDiv>
  );
};
