const Header = (props) => {
  return <h1>{props.courseName}</h1>;
};

const CourseContent = (props) => {
  console.log("Start of CourseContent");
  console.log(props.parts);
  let parts = props.parts;
  console.log(parts);
  console.log(parts[0].name);
  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.exercises}
      </p>
    </div>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.totalExcersises}</p>;
};

const App = () => {
  const course = "Half Stack application development";

  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  const parts = [part1, part2, part3];

  return (
    <div>
      <Header courseName="1.3: course information" />
      <Header courseName={course} />
      <CourseContent parts={parts} />
      <Total
        totalExcersises={part1.exercises + part2.exercises + part3.exercises}
      />
    </div>
  );
};

export default App;
