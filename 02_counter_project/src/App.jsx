import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let counter = 3;
  return (
    <>
      <h1>Counter Project and learning Hooks</h1>
      <h3>Counter Value: {counter}</h3>
      <button>Add Value</button>
      <button>Remove Value</button>
    </>
  );
}

export default App;
