import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const ExcersiseSelector = (props) => {
  if (props.ExcersiseSelected === 1.6) {
    return <ExcersiseOneSix />;
  } else if (props.ExcersiseSelected === 1.7) {
    return <ExcersiseOneSeven />;
  } else if (props.ExcersiseSelected === 1.8) {
    return <ExcersiseOneEight />;
  } else if (props.ExcersiseSelected === 1.9) {
    return <ExcersiseOneNine />;
  } else if (props.ExcersiseSelected === 1.1) {
    return <ExcersiseOneTen />;
  } else if (props.ExcersiseSelected === 1.11) {
    return <ExcersiseOneEleven />;
  }
  // Otherwise return them all!
  return (
    <div>
      <ExcersiseOneSix />
      <ExcersiseOneSeven />
      <ExcersiseOneEight />
      <ExcersiseOneNine />
      <ExcersiseOneTen />
      <ExcersiseOneEleven />
    </div>
  );
};

const App = () => {
  // Track selection
  const [excersiseSelected, setExcersiseSelected] = useState(1.6);

  const handleChangeSelection = (newSelection) => {
    console.log("Changing selection to: ", newSelection);
    setExcersiseSelected(newSelection);
  };

  return (
    <div>
      <h1>1.6 - 1.11: Uni Cafe</h1>
      <p>Selected Excersise: {excersiseSelected}</p>
      <Button handleClick={() => handleChangeSelection(1.6)} text="1.6" />
      <Button handleClick={() => handleChangeSelection(1.7)} text="1.7" />
      <Button handleClick={() => handleChangeSelection(1.8)} text="1.8" />
      <Button handleClick={() => handleChangeSelection(1.9)} text="1.9" />
      <Button handleClick={() => handleChangeSelection(1.1)} text="1.10" />
      <Button handleClick={() => handleChangeSelection(1.11)} text="1.11" />
      <Button handleClick={() => handleChangeSelection(0)} text="Show all" />

      <ExcersiseSelector ExcersiseSelected={excersiseSelected} />
    </div>
  );
};

// Excersise 1.6 ======================================================
const ExcersiseOneSix = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedbackClick = (feedbackChoice) => {
    if (feedbackChoice === "Good") {
      setFeedback({ ...feedback, good: feedback.good + 1 });
    } else if (feedbackChoice === "Neutral") {
      setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
    } else if (feedbackChoice === "Bad") {
      setFeedback({ ...feedback, bad: feedback.bad + 1 });
    }
  };

  return (
    <div>
      <hr></hr>
      <h2>1.6</h2>
      <div>
        <h2>Please provide feedback:</h2>
      </div>
      <div>
        <Button handleClick={() => handleFeedbackClick("Good")} text="Good" />
        <Button
          handleClick={() => handleFeedbackClick("Neutral")}
          text="Neutral"
        />
        <Button handleClick={() => handleFeedbackClick("Bad")} text="Bad" />
      </div>
      <div>
        <h2>Statistics</h2>
        <p>Good: {feedback.good}</p>
        <p>Neutral: {feedback.neutral}</p>
        <p>Bad: {feedback.bad}</p>
      </div>
    </div>
  );
};

// Excersise 1.7 ======================================================
const ExcersiseOneSeven = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedbackClick = (feedbackChoice) => {
    if (feedbackChoice === "Good") {
      setFeedback({ ...feedback, good: feedback.good + 1 });
    } else if (feedbackChoice === "Neutral") {
      setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
    } else if (feedbackChoice === "Bad") {
      setFeedback({ ...feedback, bad: feedback.bad + 1 });
    }
  };

  const total = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  // average score (good: 1, neutral: 0, bad: -1)
  // As neutral is worth nothing, we don't need to add it to the equation, only from the total submissions
  const avg = () => {
    return (feedback.good - feedback.bad) / total();
  };

  const positive = () => {
    return (feedback.good / total()) * 100;
  };

  return (
    <div>
      <hr></hr>
      <h2>1.7</h2>
      <div>
        <h2>Please provide feedback:</h2>
      </div>
      <div>
        <Button handleClick={() => handleFeedbackClick("Good")} text="Good" />
        <Button
          handleClick={() => handleFeedbackClick("Neutral")}
          text="Neutral"
        />
        <Button handleClick={() => handleFeedbackClick("Bad")} text="Bad" />
      </div>
      <div>
        <h2>Statistics</h2>
        <p>Good: {feedback.good}</p>
        <p>Neutral: {feedback.neutral}</p>
        <p>Bad: {feedback.bad}</p>
        <p>All: {total()}</p>
        <p>Average: {avg()}</p>
        <p>Positive: {positive()}</p>
      </div>
    </div>
  );
};

// Excersise 1.8 ======================================================
const OneEight_Statistics = (props) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>All: {props.total}</p>
      <p>Average: {props.avg}</p>
      <p>Positive: {props.positive}</p>
    </div>
  );
};

const ExcersiseOneEight = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedbackClick = (feedbackChoice) => {
    if (feedbackChoice === "Good") {
      setFeedback({ ...feedback, good: feedback.good + 1 });
    } else if (feedbackChoice === "Neutral") {
      setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
    } else if (feedbackChoice === "Bad") {
      setFeedback({ ...feedback, bad: feedback.bad + 1 });
    }
  };

  const total = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  // average score (good: 1, neutral: 0, bad: -1)
  // As neutral is worth nothing, we don't need to add it to the equation, only from the total submissions
  const avg = () => {
    return (feedback.good - feedback.bad) / total();
  };

  const positive = () => {
    return (feedback.good / total()) * 100;
  };

  return (
    <div>
      <hr></hr>
      <h2>1.8</h2>
      <div>
        <h2>Please provide feedback:</h2>
      </div>
      <div>
        <Button handleClick={() => handleFeedbackClick("Good")} text="Good" />
        <Button
          handleClick={() => handleFeedbackClick("Neutral")}
          text="Neutral"
        />
        <Button handleClick={() => handleFeedbackClick("Bad")} text="Bad" />
      </div>
      <div>
        <OneEight_Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={total()}
          avg={avg()}
          positive={positive()}
        />
      </div>
    </div>
  );
};

// Excersise 1.9 ======================================================
const OneNine_Statistics = (props) => {
  if (props.total >= 1) {
    return (
      <div>
        <p>Good: {props.good}</p>
        <p>Neutral: {props.neutral}</p>
        <p>Bad: {props.bad}</p>
        <p>All: {props.total}</p>
        <p>Average: {props.avg}</p>
        <p>Positive: {props.positive}</p>
      </div>
    );
  }
  return (
    <div>
      <p>No feedback given</p>
    </div>
  );
};
const ExcersiseOneNine = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedbackClick = (feedbackChoice) => {
    if (feedbackChoice === "Good") {
      setFeedback({ ...feedback, good: feedback.good + 1 });
    } else if (feedbackChoice === "Neutral") {
      setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
    } else if (feedbackChoice === "Bad") {
      setFeedback({ ...feedback, bad: feedback.bad + 1 });
    }
  };

  const total = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  // average score (good: 1, neutral: 0, bad: -1)
  // As neutral is worth nothing, we don't need to add it to the equation, only from the total submissions
  const avg = () => {
    return (feedback.good - feedback.bad) / total();
  };

  const positive = () => {
    return (feedback.good / total()) * 100;
  };

  return (
    <div>
      <hr></hr>
      <h2>1.9</h2>
      <div>
        <h2>Please provide feedback:</h2>
      </div>
      <div>
        <Button handleClick={() => handleFeedbackClick("Good")} text="Good" />
        <Button
          handleClick={() => handleFeedbackClick("Neutral")}
          text="Neutral"
        />
        <Button handleClick={() => handleFeedbackClick("Bad")} text="Bad" />
      </div>
      <div>
        <h2>Statistics</h2>
        <OneNine_Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={total()}
          avg={avg()}
          positive={positive()}
        />
      </div>
    </div>
  );
};

// Excersise 1.10 ======================================================
const OneTen_Statistics = (props) => {
  if (props.total >= 1) {
    return (
      <div>
        <StatisticsLine text="Good" value={props.good} />
        <StatisticsLine text="Neutral" value={props.neutral} />
        <StatisticsLine text="Bad" value={props.bad} />
        <StatisticsLine text="All" value={props.total} />
        <StatisticsLine text="Average" value={props.avg} />
        <StatisticsLine text="Positive" value={props.positive} />
      </div>
    );
  }
  return (
    <div>
      <p>No feedback given</p>
    </div>
  );
};
const StatisticsLine = ({ text, value }) => {
  return (
    <div>
      <p>
        {text}: {value}
      </p>
    </div>
  );
};
const ExcersiseOneTen = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedbackClick = (feedbackChoice) => {
    if (feedbackChoice === "Good") {
      setFeedback({ ...feedback, good: feedback.good + 1 });
    } else if (feedbackChoice === "Neutral") {
      setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
    } else if (feedbackChoice === "Bad") {
      setFeedback({ ...feedback, bad: feedback.bad + 1 });
    }
  };

  const total = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  // average score (good: 1, neutral: 0, bad: -1)
  // As neutral is worth nothing, we don't need to add it to the equation, only from the total submissions
  const avg = () => {
    return (feedback.good - feedback.bad) / total();
  };

  const positive = () => {
    return (feedback.good / total()) * 100 + "%";
  };

  return (
    <div>
      <hr></hr>
      <h2>1.10</h2>
      <div>
        <h2>Please provide feedback:</h2>
      </div>
      <div>
        <Button handleClick={() => handleFeedbackClick("Good")} text="Good" />
        <Button
          handleClick={() => handleFeedbackClick("Neutral")}
          text="Neutral"
        />
        <Button handleClick={() => handleFeedbackClick("Bad")} text="Bad" />
      </div>
      <div>
        <h2>Statistics</h2>
        <OneTen_Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={total()}
          avg={avg()}
          positive={positive()}
        />
      </div>
    </div>
  );
};

// Excersise 1.11 ======================================================
const OneEleven_Statistics = (props) => {
  if (props.total >= 1) {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>Good</td>
              <td>{props.good}</td>
            </tr>
            <tr>
              <td>Neutral</td>
              <td>{props.neutral}</td>
            </tr>
            <tr>
              <td>Bad</td>
              <td>{props.bad}</td>
            </tr>
            <tr>
              <td>All</td>
              <td>{props.total}</td>
            </tr>
            <tr>
              <td>Average</td>
              <td>{props.avg}</td>
            </tr>
            <tr>
              <td>Positive</td>
              <td>{props.positive}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div>
      <p>No feedback given</p>
    </div>
  );
};

const ExcersiseOneEleven = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedbackClick = (feedbackChoice) => {
    if (feedbackChoice === "Good") {
      setFeedback({ ...feedback, good: feedback.good + 1 });
    } else if (feedbackChoice === "Neutral") {
      setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
    } else if (feedbackChoice === "Bad") {
      setFeedback({ ...feedback, bad: feedback.bad + 1 });
    }
  };

  const total = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  // average score (good: 1, neutral: 0, bad: -1)
  // As neutral is worth nothing, we don't need to add it to the equation, only from the total submissions
  const avg = () => {
    return (feedback.good - feedback.bad) / total();
  };

  const positive = () => {
    return (feedback.good / total()) * 100;
  };

  return (
    <div>
      <hr></hr>
      <h2>1.11</h2>
      <div>
        <h2>Please provide feedback:</h2>
      </div>
      <div>
        <Button handleClick={() => handleFeedbackClick("Good")} text="Good" />
        <Button
          handleClick={() => handleFeedbackClick("Neutral")}
          text="Neutral"
        />
        <Button handleClick={() => handleFeedbackClick("Bad")} text="Bad" />
      </div>
      <div>
        <h2>Statistics</h2>
        <OneEleven_Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={total()}
          avg={avg()}
          positive={positive()}
        />
      </div>
    </div>
  );
};
export default App;
