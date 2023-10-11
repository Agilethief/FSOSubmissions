import { useState } from "react";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>The app is used by pressing the buttons</div>;
  }

  return (
    <div>
      <p>Button press history: {props.allClicks.join(" ")}</p>
      <p>Total: {props.allClicks.length}</p>
    </div>
  );
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}> {text} </button>
);

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
    up: 0,
  });

  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    const updatedLeft = clicks.left + 1;
    setClicks({ ...clicks, left: updatedLeft });
  };
  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setClicks({ ...clicks, right: clicks.right + 1 });
  };
  const handleUpClick = () => {
    setAll(allClicks.concat("U"));

    setClicks({ ...clicks, up: clicks.up + 1 });
  };

  return (
    <div>
      <div>
        {clicks.up}
        <Button handleClick={handleUpClick} text="Up" />
      </div>
      <div>
        {clicks.left}
        <Button handleClick={handleLeftClick} text="left" />
        <Button handleClick={handleRightClick} text="right" />
        {clicks.right}
      </div>
      <div>
        <History allClicks={allClicks} />
      </div>
    </div>
  );
};

export default App;
