// Responsible for rendering part of a course. may have any number of these.

const Course_Part = ({ part }) => {
  //console.log(part);

  return (
    <div>
      <h2>
        {part.id}: {part.name}
      </h2>
      <p>Number of excersises: {part.exercises}</p>
    </div>
  );
};

export default Course_Part;
