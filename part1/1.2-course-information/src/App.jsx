const Header = (props) => {
  return <h1>{props.courseName}</h1>;
};

const CourseContent = (props) => {
  //console.log("Start of CourseContent");
  //console.log(props.parts);
  let parts = props.parts;
  return (
    <div>
      <Part part={parts[0].part} exercise={parts[0].exercise} />
      <Part part={parts[1].part} exercise={parts[1].exercise} />
      <Part part={parts[2].part} exercise={parts[2].exercise} />
      <Part part={parts[3].part} exercise={parts[3].exercise} />
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercise}
      </p>
    </div>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.totalExcersises}</p>;
};

const App = () => {
  const course = "Half Stack application development";

  const parts = [
    { part: "Fundamentals of React", exercise: 10 },
    { part: "Using props to pass data", exercise: 7 },
    { part: "State of a component", exercise: 14 },
    { part: "Telling jokes via code", exercise: 69 },
  ];

  return (
    <div>
      <Header courseName="1.2: course information" />
      <Header courseName={course} />
      <CourseContent parts={parts} />
      <Total
        totalExcersises={
          parts[0].exercise + parts[1].exercise + parts[2].exercise
        }
      />
    </div>
  );
};

export default App;
