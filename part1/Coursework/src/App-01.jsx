import { useState } from "react";

let helloCounter = 0;

const Hello = ({ age, name }) => {
  helloCounter += 1;

  //const { age, name } = props;

  //const age = props.age;
  //const name = props.name;

  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}: number {helloCounter}
      </p>
      <p>You are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

const Display = ({ counter }) => {
  return <div>{counter}</div>;
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const resetCounter = () => setCounter(0);
  //setTimeout(() => setCounter(counter + 1), 100);

  const now = new Date();
  const a = 10;
  const b = 20;
  //console.log(now, a + b);

  const name = "Peter";
  const age = 10;

  //console.log("Random" + Math.random() * 10);

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text="Plus" />
      <Button handleClick={decreaseByOne} text="Minus" />
      <Button handleClick={resetCounter} text="Zero" />
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <Hello name="Bob" age={a + b} />
      <Hello name={name} age={age} />
      <Hello name="Stacy" age={Math.round(Math.random() * 80)} />
    </div>
  );
};

export default App;
