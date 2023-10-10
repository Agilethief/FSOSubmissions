const Header = (props) => {
  return <h1>{props.courseName}</h1>;
};

const CourseContent = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.totalExcersises}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header courseName="1.1: course information" />
      <Header courseName={course} />
      <CourseContent part={part1} exercise={exercises1} />
      <CourseContent part={part2} exercise={exercises2} />
      <CourseContent part={part3} exercise={exercises3} />
      <Total totalExcersises={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
