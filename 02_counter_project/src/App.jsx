import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let counter = 3; wrong method to update state in react, problem in state and ui sync

  let [counter, setCounter] = useState(0); // added useState() hook

  function addValue() {
    counter += 1; // not good approach, causses mutation
    setCounter(counter);
  }

  function decValue() {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Counter Project and learning Hooks</h1>
      <h3>Counter Value: {counter}</h3>
      <button id="addVal" onClick={addValue}>
        Add Value
      </button>
      <button id="remVal" onClick={decValue}>
        Remove Value
      </button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
