import Course from "./components/Course";

// 2.5 - I seem to have just already done that by default as the last thing we learned was making components so it seemed obvious to make the course a component.

const App = () => {
  const allCoursesData = [
    {
      name: "Half Stack application development",
      id: 1,
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
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];
  // 2.4 = Use map to extract all courses and display them.
  return (
    <div>
      {allCoursesData.map((course) => (
        <Course key={course.id} courseData={course} />
      ))}
    </div>
  );
};

export default App;
