import styled from "@emotion/styled";
import { Route, Routes } from "react-router-dom";
import { Ask } from "./Ask";
import { Home } from "./Home";
import { Jobs } from "./Jobs";
import { NavBar } from "./NavBar";
import { New } from "./New";
import { SearchBar } from "./SearchBar";
import { Show } from "./Show";
import { Top } from "./Top";

const Container = styled.div`
  width: 375px;
  height: 812px;
  border: 1px solid black;
  border-radius: 0 0 44px 44px;
  position: relative;
`;

export const Main = () => {
  return (
    <Container>
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Top" element={<Top />} />
        <Route path="/New" element={<New />} />
        <Route path="/Ask" element={<Ask />} />
        <Route path="/Show" element={<Show />} />
        <Route path="/Jobs" element={<Jobs />} />
      </Routes>
      <NavBar />
    </Container>
  );
};
