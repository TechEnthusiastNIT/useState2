import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function apiAdvice() {
    const apis = await fetch("	https://api.adviceslip.com/advice");
    const resi = await apis.json();
    setAdvice(resi.slip.advice);
    setCount(count + 1);
  }
  useEffect(function () {
    apiAdvice();
  }, []);
  return (
    <div className="App">
      <h1>{advice}</h1>
      <button onClick={apiAdvice}>get advice</button>
      <Message count={count} />
    </div>
  );
}
function Message(props) {
  return (
    <p>
      You have visited api <strong>{props.count} </strong>no of times
    </p>
  );
}
