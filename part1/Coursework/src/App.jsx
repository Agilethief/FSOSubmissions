import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Display = (props) => <div>{props.value}</div>;

const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => () => {
    console.log("value set to", newValue);
    setValue(newValue);
  };

  const hello = (who) => () => {
    console.log("Hello,", who);
  };

  return (
    <div>
      <Display value={value} />
      <button onClick={hello("world")}>reset to zero</button>
      <button onClick={hello("react")}>reset to zero</button>
      <button onClick={hello("function")}>reset to zero</button>
      <div>
        <button onClick={setToValue(1000)}>thousand</button>{" "}
        <button onClick={setToValue(0)}>reset</button>{" "}
        <button onClick={setToValue(value + 1)}>increment</button>
      </div>
    </div>
  );
};
export default App;
