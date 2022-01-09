import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { InputBox } from "./Components/InputBox/InputBox";

function App() {
  const [value, setValue] = useState("");
  return (
    <>
      <div className="App">
        <InputBox length={4} perBox={4} onChange={(val) => setValue(val)} />
      </div>
      <h3>{value}</h3>
    </>
  );
}

export default App;
