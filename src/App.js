import { useEffect, useState } from "react";
import { Main } from "./components/Main";
import { Spinner } from "./components/Spinner";
import "./styles.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return <>{loading ? <Spinner /> : <Main />}</>;
}
