import Course_Header from "./Course_Header";
import Course_Part from "./Course_Part";
import Course_Summary from "./Course_Summary";

const Course = ({ courseData }) => {
  //console.log(courseData);
  //console.log(courseData.name);

  return (
    <div>
      <Course_Header courseName={courseData.name} />
      <ul>
        {courseData.parts.map((part) => (
          <Course_Part key={part.id} part={part} />
        ))}
      </ul>
      <Course_Summary courseData={courseData} />
    </div>
  );
};

export default Course;
