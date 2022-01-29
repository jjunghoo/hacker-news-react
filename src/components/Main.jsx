import styled from "@emotion/styled";
import { NavBar } from "./NavBar";
import { SearchBar } from "./SearchBar";

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
      <main>"main"</main>
      <NavBar />
    </Container>
  );
};
