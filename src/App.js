// import { useEffect, useState } from "react";
// import { BrowserRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./components/Main";
// import { Spinner } from "./components/Spinner";
import "./styles.css";

export default function App() {
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Main />
        {/* <BrowserRouter>{loading ? <Spinner /> : <Main />}</BrowserRouter> */}
      </BrowserRouter>
    </>
  );
}
