import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { getComments } from "../service/hackerNewsAPI";
import { Comments } from "./Comments";
import userImg from "../images/userImg.png";
import reCommentImg from "../images/reCommentImg.png";
import { mapTime } from "../mappers/mapTimes";
import { NavLink } from "react-router-dom";

const CommentWrap = styled.div`
  /* border: 1px solid; */
  padding: 20px 20px 40px;
`;

const UserProfile = styled.div`
  /* border: 1px solid black; */
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
  // console.log(comment);
  // console.log(typeof storyId, typeof parent);
  return (
    <CommentWrap>
      <UserProfile>
        {storyId === parent ? (
          <img src={userImg} alt="유저 이미지" />
        ) : (
          <img src={reCommentImg} alt="대댓글 이미지" />
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
