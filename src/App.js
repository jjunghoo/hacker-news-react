import { BrowserRouter } from "react-router-dom";
import { Main } from "./components/Main";
import ScrollToTop from "./ScrollTop";
import "./styles.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Main />
      </BrowserRouter>
    </>
  );
}
