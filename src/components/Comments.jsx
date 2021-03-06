import styled from "@emotion/styled";
import { Comment } from "./Comment";

const CommentsWrap = styled.div`
  /* padding-top: 20px; */
  padding: 20px 0px 20px 0px;
`;

export const Comments = ({ commentId, storyId }) => {
  // console.log(commentId);
  return (
    <CommentsWrap>
      {commentId &&
        commentId.map((id) => (
          <Comment key={id} commentId={id} storyId={storyId} />
        ))}
    </CommentsWrap>
  );
};
