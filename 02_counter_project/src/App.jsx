import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let counter = 3; wrong method to update state in react, problem in state and ui sync

  let [counter, setCounter] = useState(0); // added useState() hook

  function addValue() {
    console.log("Adding Value", Math.random());
    counter++;

    console.log("Counter add Value", counter);
    return counter;
  }

  function decValue() {
    console.log("Decreasing Value", Math.random());
    counter--;

    console.log("Counter decrease Value", counter);
    return counter;
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
    </>
  );
}

export default App;
