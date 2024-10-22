import './App.css';
import { useState } from "react";

function Key({ label, clickHandler }) {
  return (
    <button onClick={clickHandler}>
      {label}
    </button>
  );
}

function Display({ display }) {
  return (
    <div className="DispContainer">
      {display}
    </div>
  );
}

function NameDisplay({ name }) {
  return (
    <div className="nameDisplay">
      {name}
    </div>
  );
}

function App() {
  const [disp, setDisp] = useState("10 Things That Require Zero Talent");
  const [name] = useState("Rency Dayne M. Duque");

  const items = [
    "Being On Time",
    "Making An Effort",
    "Being High Energy",
    "Having A Positive Attitude",
    "Being Passionate",
    "Using Good Body Language",
    "Being Coachable",
    "Doing A Little Extra",
    "Being Prepared",
    "Having A Strong Work Ethic"
  ];

  const itemClickHandler = (index) => {
    setDisp(items[index]);
  };

  const resetClickHandler = () => {
    setDisp("10 Things That Require Zero Talent");
  };

  const nameClickHandler = () => {
    setDisp(name.toUpperCase());
  };

  return (
    <div className="App">
      <div className="CalcContainer">
        <NameDisplay name={`${name} - BSIT 3-A`} />
        <Display display={disp} />
        <div className="ButtonsContainer">
          {items.slice(0, 9).map((_, index) => (
            <Key key={index} label={index + 1} clickHandler={() => itemClickHandler(index)} />
          ))}
          <Key label={"0"} clickHandler={() => itemClickHandler(9)} /> {/* Index 9 for "Having A Strong Work Ethic" */}
          <Key label={"RESET"} clickHandler={resetClickHandler} />
          <Key label={"NAME"} clickHandler={nameClickHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
