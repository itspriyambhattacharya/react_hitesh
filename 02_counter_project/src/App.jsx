import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// function addValue(a) {
//   a++;
//   return a;
// }

// function decValue(a) {
//   a--;
//   return a;
// }

function App() {
  let counter = 3;
  const addBtn = document.getElementById("addVal");
  console.log(addBtn);

  addBtn.addEventListener("click", () => {
    console.log("Adding Value");
  });

  const delBtn = document.querySelector("#remVal");
  console.log(delBtn);
  delBtn.addEventListener("click", () => {
    console.log("Deleting Value");
  });

  return (
    <>
      <h1>Counter Project and learning Hooks</h1>
      <h3>Counter Value: {counter}</h3>
      <button id="addVal">Add Value</button>
      <button id="remVal">Remove Value</button>
    </>
  );
}

export default App;
