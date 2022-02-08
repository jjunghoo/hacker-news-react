import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Ask } from "./Ask";
import { Home } from "./Home";
import { Jobs } from "./Jobs";
import { NavBar } from "./NavBar";
import { New } from "./New";
import { PostContent } from "./PostContent";
import { SearchBar } from "./SearchBar";
import { Show } from "./Show";
import { Spinner } from "./Spinner";
import { Top } from "./Top";
import { UserInfo } from "./UserInfo";

const Container = styled.div`
  /* width: 375px; */
  height: 84vh;
  /* border: 1px solid black; */
  /* border-radius: 0 0 44px 44px; */
  /* position: relative; */
`;

export const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Container>
          <Spinner />
        </Container>
      ) : (
        <Container>
          <SearchBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Top" element={<Top />} />
            <Route path="/New" element={<New />} />
            <Route path="/Ask" element={<Ask />} />
            <Route path="/Show" element={<Show />} />
            <Route path="/Jobs" element={<Jobs />} />
            <Route path="/user/:name" element={<UserInfo />} />
            <Route
              path="/:menutype/:storyId/comment"
              element={<PostContent />}
            />
            <Route path="/:menutype/:storyId" element={<PostContent />} />
          </Routes>
          <NavBar />{" "}
        </Container>
      )}
    </>
  );
};
