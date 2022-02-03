import { BrowserRouter } from "react-router-dom";
import { Main } from "./components/Main";
import "./styles.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </>
  );
}
