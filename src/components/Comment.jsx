import { useEffect, useState } from "react";
import { getComments } from "../service/hackerNewsAPI";
import { Comments } from "./Comments";

export const Comment = ({ commentId }) => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    getComments(commentId).then((data) => setComment(data));
  }, [commentId]);

  // 대댓글 불러와야 함

  const { kids } = comment;
  console.log(comment);
  return (
    <>
      <div>{comment.by}</div>
      <div>{kids && <Comments commentId={kids} />}</div>
    </>
  );
};
