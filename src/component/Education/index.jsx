import "./index.css";

const educationData = [
  {
    id: 1,
    degree: "B.com Computers Applications",
    institution: "XYZ University, Chennai",
    year: "2021 - 2023",
  },
  {
    id: 2,
    degree: "Higher Secondary (HSC)",
    institution: "ABC Matriculation School",
    year: "2019 - 2021",
  },
  {
    id: 3,
    degree: "Secondary School (SSLC)",
    institution: "ABC Matriculation School",
    year: "2017 - 2018",
  },
];

const Education = () => {
  return (
    <div className="education"  data-aos="fade-left">
      <h1 className="edu-head">Education</h1>
      {educationData.map((each, i) => (
        <li key={i} className="list-degree">
          <h4 className="course-name">{each.degree}</h4>
          <p className="clg-name">{each.institution}</p>
          <span className="year">{each.year}</span>
        </li>
      ))}
    </div>
  );
};

export default Education;
