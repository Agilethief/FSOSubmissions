const Course_Summary = ({ courseData }) => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

  console.log("course summary start");
  const courseParts = courseData.parts;
  console.log("coursparts set:", courseParts);

  const total = courseParts.reduce(
    (totalCount, part) => totalCount + part.exercises,
    0
  );

  return (
    <div>
      <p>Total of {total} excercises</p>
    </div>
  );
};

export default Course_Summary;
