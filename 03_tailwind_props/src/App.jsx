import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-amber-600">Hello Tailwind + React</h1>
      <Card />
      <Card />
    </>
  );
}

export default App;
