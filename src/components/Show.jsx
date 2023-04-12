import styled from "@emotion/styled";
import { memo, useEffect, useRef, useState } from "react";
import { getStories } from "../service/hackerNewsAPI";
import { Banner } from "./Banner";
import { Story } from "./Story";
import { useMediaQuery } from "react-responsive";
import { keyframes } from "@emotion/react";

const WrapDiv = styled.ul`
  height: 85.5vh;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const PagingDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const PagingButton = styled.button`
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 3px;
  background-color: #f60;
  color: #fff;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;

  &::after {
    content: " ";
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 5px solid #fff;
    border-top-color: transparent;
    animation: ${spin} 1s linear infinite;
  }
`;

export const Show = memo(() => {
  const [storyIds, setStoryIds] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const ulRef = useRef();

  const isMobileAndTablet = useMediaQuery({
    query: "(min-width:320px) and (max-width:1399px)",
  });

  useEffect(() => {
    setLoading(true);
    getStories("show")
      .then((ids) =>
        setStoryIds(ids.map((data) => (data = { id: data, menuType: "show" })))
      )
      .finally(() => setLoading(false));
  }, []);

  const handleScroll = () => {
    if (isMobileAndTablet) {
      const element = ulRef.current;
      if (!element) return;

      const { scrollTop, clientHeight, scrollHeight } = element;
      if (scrollTop + clientHeight >= scrollHeight - 200) {
        setStartIndex((prev) => prev + 1);
      }
    }
  };

  const handlePrev = () => {
    setStartIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setStartIndex((prev) => prev + 1);
  };

  useEffect(() => {
    const element = ulRef.current;
    if (!element) return;

    element.addEventListener("scroll", handleScroll);
    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, [ulRef.current]);

  return (
    <WrapDiv
      style={{ height: isMobileAndTablet ? "85.5vh" : "88.5vh" }}
      ref={ulRef}
    >
      {loading && <LoadingSpinner />}
      <Banner style={{ display: isMobileAndTablet ? "block" : "none" }}>
        SHOW
      </Banner>
      <ul style={{ margin: isMobileAndTablet ? "0" : "0 23%" }}>
        {!loading && (
          <>
            {isMobileAndTablet
              ? storyIds
                  .slice(0, startIndex * 10 + 10)
                  .map((storyId, i) => <Story key={i} storyId={storyId} />)
              : storyIds
                  .slice(startIndex * 10, (startIndex + 1) * 10)
                  .map((storyId, i) => (
                    <Story
                      key={startIndex * 10 + i}
                      storyId={storyId}
                      index={startIndex * 10 + i}
                    />
                  ))}
          </>
        )}
      </ul>
      {!isMobileAndTablet && (
        <PagingDiv>
          <PagingButton
            onClick={handlePrev}
            disabled={startIndex === 0}
          >{`< Prev`}</PagingButton>
          <PagingButton
            onClick={handleNext}
            disabled={(startIndex + 1) * 10 >= storyIds.length}
          >{`Next >`}</PagingButton>
        </PagingDiv>
      )}
      {isMobileAndTablet && loading && <LoadingSpinner />}{" "}
    </WrapDiv>
  );
});
