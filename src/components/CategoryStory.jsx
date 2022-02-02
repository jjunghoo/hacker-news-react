import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { getStory } from "../service/hackerNewsAPI";
import point from "../images/point.png";
import comment from "../images/comment.png";

const CategoryStoryDiv = styled.div`
  padding: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-bottom: 10px;
  a {
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    text-decoration: none;
    color: rgba(0, 0, 0, 1);
  }
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    font-weight: 300;
    font-size: 12px;
    line-height: 14.06px;
    padding: 13px 0 0;
    color: rgba(0, 0, 0, 1);
  }
  div {
    /* border: 1px solid black; */
    margin-top: 15.33px;
    width: 67px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    span {
      color: rgba(253, 97, 6, 1);
      font-weight: 400;
      font-size: 10px;
      line-height: 10px;
      /* letter-spacing: -0.5px; */
    }
  }
`;

export const CategoryStory = ({ categoryData }) => {
  const [categoryStory, setCategoryStory] = useState([]);

  useEffect(() => {
    getStory(categoryData).then((data) => setCategoryStory(data));
  }, [categoryData]);

  // console.log(categoryStory)
  return (
    <CategoryStoryDiv>
      <a href={categoryStory.url} rel="noopener noreferrer" target="_blank">
        <span>{categoryStory.title}</span>
      </a>
      {categoryStory.text ? (
        <p>{categoryStory.text}</p>
      ) : (
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      )}
      <div>
        <img src={point} alt="point 이미지" />
        <span>{categoryStory.score}</span>
        <img src={comment} alt="comment 이미지" />
        <span>{categoryStory.descendants}</span>
      </div>
    </CategoryStoryDiv>
  );
};
