import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { getComments } from "../service/hackerNewsAPI";
import { Comments } from "./Comments";
import { mapTime } from "../mappers/mapTimes";
import { NavLink } from "react-router-dom";

const CommentWrap = styled.div`
  padding: 20px 10px 10px 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  overflow-wrap: anywhere;
  :first-of-type {
    border-top: none;
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  a > p {
    color: rgba(77, 77, 77, 1);
    font-weight: 700;
    font-size: 14px;
    line-height: 19.6px;
    margin-left: 6px;
  }
`;

const UserText = styled.p`
  margin: 10px 0;
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;
  overflow-wrap: anywhere;
  a {
    color: #333333;
    font-weight: 600;
  }
`;

const CommentDate = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: rgba(107, 107, 107, 1);
`;

export const Comment = ({ commentId, storyId }) => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    getComments(commentId).then((data) => setComment(data));
  }, [commentId]);

  const { parent, kids } = comment;

  return (
    <CommentWrap>
      <UserProfile>
        {storyId === parent ? (
          <img
            src="https://rawcdn.githack.com/jjunghoo/hacker-news-react/ae48fa4dcdbda68dd674dd65a6184f3eae0b2cda/src/images/userImg.png"
            alt="유저 이미지"
          />
        ) : (
          <img
            src="https://rawcdn.githack.com/jjunghoo/hacker-news-react/ae48fa4dcdbda68dd674dd65a6184f3eae0b2cda/src/images/reCommentImg.png"
            alt="대댓글 이미지"
          />
        )}
        <NavLink to={`/user/${comment.by}`} style={{ textDecoration: "none" }}>
          <p>{comment.by}</p>
        </NavLink>
      </UserProfile>
      <UserText dangerouslySetInnerHTML={{ __html: comment.text }}></UserText>
      <CommentDate>{mapTime(comment.time)} ago</CommentDate>
      <div>{kids && <Comments commentId={kids} storyId={storyId} />}</div>
    </CommentWrap>
  );
};
