import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const ExcersiseSelector = (props) => {
  if (props.ExcersiseSelected === 1.12) {
    return <ExcersiseOneTwelve />;
  } else if (props.ExcersiseSelected === 1.13) {
    return <ExcersiseOneThirteen />;
  } else if (props.ExcersiseSelected === 1.14) {
    return <ExcersiseOneFourteen />;
  }
  // Otherwise return them all!
  return (
    <div>
      <ExcersiseOneTwelve />
      <ExcersiseOneThirteen />
      <ExcersiseOneFourteen />
    </div>
  );
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Random range rference
const GetRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const App = () => {
  // Track selection
  const [excersiseSelected, setExcersiseSelected] = useState(1.12);

  const handleChangeSelection = (newSelection) => {
    console.log("Changing selection to: ", newSelection);
    setExcersiseSelected(newSelection);
  };

  return (
    <div>
      <h1>1.12 - 1.14: Anecdotes</h1>
      <p>Selected Excersise: {excersiseSelected}</p>
      <Button handleClick={() => handleChangeSelection(1.12)} text="1.12" />
      <Button handleClick={() => handleChangeSelection(1.13)} text="1.13" />
      <Button handleClick={() => handleChangeSelection(1.14)} text="1.14" />
      <Button handleClick={() => handleChangeSelection(0)} text="Show all" />

      <ExcersiseSelector ExcersiseSelected={excersiseSelected} />
    </div>
  );
};

// Excersise 1.12 ======================================================

const ExcersiseOneTwelve = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selectedAnecdote, setAnecdote] = useState(0);

  const handleRandomClick = () => {
    let randomNum = GetRandomInt(anecdotes.length);
    setAnecdote(randomNum);
  };

  return (
    <div>
      <hr></hr>
      <h2>1.12</h2>
      <div>
        <h2>Anecdotes</h2>
      </div>
      <div>
        <Button handleClick={() => handleRandomClick()} text="Distill wisdom" />
      </div>
      <div>
        <h2>Wisdom</h2>
        <p>{anecdotes[selectedAnecdote]}</p>
      </div>
    </div>
  );
};

// Excersise 1.13 ======================================================
const ExcersiseOneThirteen = () => {
  const [anecdotes, setAnecdote] = useState([
    { anecdote: "If it hurts, do it more often.", voteCount: 0 },
    {
      anecdote: "Adding manpower to a late software project makes it later!",
      voteCount: 0,
    },
    {
      anecdote:
        "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      voteCount: 0,
    },
    {
      anecdote:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      voteCount: 0,
    },
    {
      anecdote: "Premature optimization is the root of all evil.",
      voteCount: 0,
    },
    {
      anecdote:
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      voteCount: 0,
    },
    {
      anecdote:
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
      voteCount: 0,
    },
    { anecdote: "The only way to go fast, is to go well.", voteCount: 0 },
  ]);

  const [selectedAnecdote, setAnecdoteIndex] = useState(0);

  const handleRandomClick = () => {
    let randomNum = GetRandomInt(anecdotes.length);
    setAnecdoteIndex(randomNum);
  };

  const handleVoteClick = (voteIndex) => {
    console.log("Voting for: ", voteIndex);
    const anecdotesCopy = [...anecdotes];
    anecdotesCopy[voteIndex].voteCount += 1;
    setAnecdote(anecdotesCopy);
  };

  return (
    <div>
      <hr></hr>
      <h2>1.13</h2>
      <div>
        <h2>Anecdotes</h2>
      </div>
      <div>
        <Button
          handleClick={() => handleVoteClick(selectedAnecdote)}
          text="Vote"
        />
        <Button handleClick={() => handleRandomClick()} text="Next anecdote" />
      </div>
      <div>
        <p>{anecdotes[selectedAnecdote].anecdote}</p>
        <p>Has: {anecdotes[selectedAnecdote].voteCount} votes</p>
      </div>
    </div>
  );
};

// Excersise 1.13 ======================================================
const ExcersiseOneFourteen = () => {
  const [anecdotes, setAnecdote] = useState([
    { anecdote: "If it hurts, do it more often.", voteCount: 0 },
    {
      anecdote: "Adding manpower to a late software project makes it later!",
      voteCount: 0,
    },
    {
      anecdote:
        "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      voteCount: 0,
    },
    {
      anecdote:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      voteCount: 0,
    },
    {
      anecdote: "Premature optimization is the root of all evil.",
      voteCount: 0,
    },
    {
      anecdote:
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      voteCount: 0,
    },
    {
      anecdote:
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
      voteCount: 0,
    },
    { anecdote: "The only way to go fast, is to go well.", voteCount: 0 },
  ]);

  // classic for loop to find highest vote count
  const highestAnecdoteIndex = () => {
    let highestVoteIndex = 0;
    let highestVoteCount = 0;
    for (let i = 0; i < anecdotes.length; i++) {
      if (anecdotes[i].voteCount > highestVoteCount) {
        highestVoteCount = anecdotes[i].voteCount;
        highestVoteIndex = i;
      }
    }
    return highestVoteIndex;
  };

  const [selectedAnecdote, setAnecdoteIndex] = useState(0);

  const handleRandomClick = () => {
    let randomNum = GetRandomInt(anecdotes.length);
    setAnecdoteIndex(randomNum);
  };

  const handleVoteClick = (voteIndex) => {
    console.log("Voting for: ", voteIndex);
    const anecdotesCopy = [...anecdotes];
    anecdotesCopy[voteIndex].voteCount += 1;
    setAnecdote(anecdotesCopy);
  };

  return (
    <div>
      <hr></hr>
      <h2>1.14</h2>
      <div>
        <h2>Anecdotes</h2>
      </div>
      <div>
        <Button
          handleClick={() => handleVoteClick(selectedAnecdote)}
          text="Vote"
        />
        <Button handleClick={() => handleRandomClick()} text="Next anecdote" />
      </div>
      <div>
        <p>{anecdotes[selectedAnecdote].anecdote}</p>
        <p>Has: {anecdotes[selectedAnecdote].voteCount} votes</p>
      </div>
      <div>
        <h2>Anecdote with highest vote count:</h2>
        <p>{anecdotes[highestAnecdoteIndex()].anecdote}</p>
        <p>Has: {anecdotes[highestAnecdoteIndex()].voteCount} votes</p>
      </div>
    </div>
  );
};

export default App;
