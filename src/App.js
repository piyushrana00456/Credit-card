import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { v4 as uuid } from "uuid";
import "./App.css";
import { useState } from "react";
import { InputBox } from "./Components/InputBox/InputBox";
import { CardDetail } from "./Components/CardDetail/CardDetail";

function App() {
  const [value, setValue] = useState("");
  const initValue = {
    num: value,
    id: uuid(),
  };
  const [data, setData] = useState([]);
  const handleSave = () => {
    setData([...data, initValue]);
  };

  const handleremove = (id) => {
    console.log(id);
    let remove = data.filter((e) => e.id !== id);
    setData(remove);
  };

  return (
    <>
      <div className="App">
        <InputBox length={4} perBox={4} onChange={(val) => setValue(val)} />
      </div>
      <div className="wrap">
        <div className="cardWrap">
          <div className="card">
            <Cards number={value} />
          </div>
          <div className="btn">
            <button onClick={handleSave}>Save</button>
          </div>
        </div>
        <div className="det">
          {data.length > 0 &&
            data.map((value) => (
              <CardDetail handleremove={handleremove} value={value} />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
