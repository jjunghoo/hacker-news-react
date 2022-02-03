import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { getStory } from "../service/hackerNewsAPI";
import { Banner } from "./Banner";
import { mapTime } from "../mappers/mapTimes";
import { Comment } from "./Comment";

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
  p {
    display: inline-block;
    margin-top: 10px;
    color: rgba(107, 107, 107, 1);
    font-size: 12px;
    line-height: 13.2px;
    font-weight: 400;
    b {
      font-weight: 700;
    }
  }
`;

const BaseLineDiv = styled.div`
  height: 40px;
  background-color: #e5e5e5;
`;

const CommentsWrap = styled.div`
  padding: 40px 20px;
`;

export const Comments = ({ commentId }) => {
  const [story, setStory] = useState([]);
  const params = useParams();
  const { title, by, descendants, kids, time, url } = story;

  useEffect(() => {
    getStory(params.storyId).then((data) => setStory(data));

    // 글 따로 분류
    // 대댓글 가져오는거 필요
  }, [params.storyId]);
  // console.log(params, story);
  console.log(commentId);

  return (
    <>
      <Banner>{params.menutype.toUpperCase()}</Banner>
      <StoryContent>
        <a href={url} rel="noreferrer noreferrer" target="_blank">
          <span>{title}</span>
        </a>
        <br />
        <p>
          {mapTime(time)} ago{" "}
          <NavLink to={`/user/${by}`}>
            <b>by {by}</b>
          </NavLink>
        </p>
        <br />
        <p>{descendants} comment</p>
      </StoryContent>
      <BaseLineDiv />
      <CommentsWrap>
        {commentId &&
          commentId.map((id) => <Comment key={id} commentId={id} />)}
      </CommentsWrap>
    </>
  );
};
