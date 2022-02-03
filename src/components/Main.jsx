import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Ask } from "./Ask";
import { Comments } from "./Comments";
import { Home } from "./Home";
import { Jobs } from "./Jobs";
import { NavBar } from "./NavBar";
import { New } from "./New";
import { SearchBar } from "./SearchBar";
import { Show } from "./Show";
import { Spinner } from "./Spinner";
import { Top } from "./Top";
import { UserInfo } from "./UserInfo";

const Container = styled.div`
  width: 375px;
  height: 812px;
  border: 1px solid black;
  border-radius: 0 0 44px 44px;
  position: relative;
`;

export const Main = () => {
  const [loading, setLoading] = useState(true);

  const location = useLocation().state;
  console.log(location);

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
              element={<Comments commentId={location} />}
            />
          </Routes>
          <NavBar />{" "}
        </Container>
      )}
    </>
  );
};
