import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let counter = 3; wrong method to update state in react, problem in state and ui sync

  let [counter, setCounter] = useState(0); // added useState() hook

  function addValue() {
    counter += 1; // not good approach, causes mutation
    setCounter(counter);
  }

  function decValue() {
    setCounter(counter - 1);
  }

  // Assignment - The value of counter should be in the range of 0 to 20 both inclusive

  const addValueAssignment = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const decValueAssignment = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Counter Project and learning Hooks</h1>
      <h3>Counter Value: {counter}</h3>
      <button id="addVal" onClick={addValueAssignment}>
        Add Value
      </button>
      <button id="remVal" onClick={decValueAssignment}>
        Remove Value
      </button>
      <br />
      <a
        href="https://github.com/acdlite/react-fiber-architecture"
        target="_blank"
      >
        React Fibre Architecture (Read)
      </a>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
