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
  const totalExcersises =
    props.totalExcersises[0].exercises +
    props.totalExcersises[1].exercises +
    props.totalExcersises[2].exercises;

  return <p>Number of exercises {totalExcersises}</p>;
};

const App = () => {
  const course = {
    courseName: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header courseName="1.5: course information" />
      <Header courseName={course.courseName} />
      <CourseContent parts={course.parts} />
      <Total totalExcersises={course.parts} />
    </div>
  );
};

export default App;
