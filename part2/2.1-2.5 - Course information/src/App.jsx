import Course from "./components/Course";

const App = () => {
  const courseData = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "An extra part to the course",
        exercises: 8,
        id: 4,
      },
    ],
  };

  return <Course courseData={courseData} />;
};

export default App;
