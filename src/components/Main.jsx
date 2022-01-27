import styled from "@emotion/styled";
import { SearchBar } from "./SearchBar";

const Container = styled.div`
  width: 375px;
  height: 812px;
  border: 1px solid black;
`;

export const Main = () => {
  return (
    <Container>
      <SearchBar />
      <main>"main"</main>
    </Container>
  );
};
