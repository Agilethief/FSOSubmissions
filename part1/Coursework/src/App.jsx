let counter = 0;

const Hello = (props) => {
  counter += 1;
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}: number {counter}
      </p>
      <p>You are {props.age} years old</p>
    </div>
  );
};

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);

  const name = "Peter";
  const age = 10;

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
        <Hello name="Bob" age={a + b} />
        <Hello name={name} age={age} />
        <Hello name="Stacy" age={(Math.random * 10).toString()} />
      </p>
    </div>
  );
};

export default App;
