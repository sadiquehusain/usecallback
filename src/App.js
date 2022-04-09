import { useCallback, useState } from "react";
import "./styles.css";
import Counter from "../Counter";
export default function App() {
  const [int, setInt] = useState(0);
  const [intial, setInitial] = useState(100);
  const incdata = useCallback(() => {
    setInt(int + 1);
  }, [int]);

  const decdata = useCallback(() => {
    setInitial(intial - 1);
  }, [intial]);

  return (
    <>
      <h1>{int}</h1>
      <Counter handleclick={incdata}>incdata</Counter>
      <h1>{intial}</h1>
      <Counter handleclick={decdata}>deccdata</Counter>
    </>
  );
}
