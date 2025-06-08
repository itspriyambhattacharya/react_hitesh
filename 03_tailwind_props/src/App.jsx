import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const objName = {
    fname: "Dummy",
    lname: "Name",
  };

  const arr = [1, 3, 4, 5, 6];

  return (
    <>
      <h1 className="bg-amber-600">Hello Tailwind + React</h1>
      <Card name="Priyam Bhattacharya" age="23" />

      <Card dummyName={objName} dummyArr={arr} />
    </>
  );
}

export default App;
