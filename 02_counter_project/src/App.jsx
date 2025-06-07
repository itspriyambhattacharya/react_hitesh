import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function addValue(a) {
  console.log("Adding Value", Math.random());

  // a++;
  // return a;
}

function decValue(a) {
  console.log("Decreasing Value", Math.random());
  // a--;
  // return a;
}

function App() {
  let counter = 3;

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
