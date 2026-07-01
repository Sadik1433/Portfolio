import ProgressBar from "./ProgressBar";

const education = [
  {
    id: 1,
    class: "Bachelor of Commerce (B.Com) – Computer Applications",
    college: "SIES College of Commerce and Economics, Mumbai",
    year: "2019-2022",
  },
  {
    id: 2,
    class: "Intermediate (Commerce)",
    college: "SIES College of Science, Mumbai",
    year: "2017-2019",
  },
  {
    id: 3,
    class: "Secondary Education (10th Grade)",
    college: "Hpoe Muncipal High School",
    year: "2016-2018",
  },
];

const skills = [
  {
    id: 1,
    name: "React",
    value: 80,
  },
  {
    id: 2,
    name: "JavaScript",
    value: 90,
  },
  {
    id: 3,
    name: "Java",
    value: 50,
  },
  {
    id: 4,
    name: "SpringBoot",
    value: 5,
  },
  {
    id: 5,
    name: "Python",
    value: 70,
  },
  {
    id: 6,
    name: "HTML",
    value: 100,
  },
  {
    id: 7,
    name: "CSS",
    value: 100,
  },
];

const Skills = () => {
  return (
    <section id="skill" className="md:h-auto lg:h-screen w-screen px-2 py-4">
      <div className="relative  text-xl text-white flex flex-col gap-10 md:flex-row md:text-xl lg:text-2xl">
        <div className="md:flex-1 px-2" data-aos="fade-left">
          <h1 className="text-2xl font-bold text-[var(--color-primary)] [text-shadow:2px_1px_1px_var(--shadow)]">
            About Me
          </h1>
          <p className="mt-4 text-[16px] text-[var(--color-text-body)] text-pretty  leading-6 md:text-xl lg:text-2xl lg:leading-12">
            I am passionate and self driven software developer with a strong
            interest in web develpoment and problem-solving. I have developed
            projects using modern technolgies such as  <br/>
            {skills.map((s, i) => (
              <strong key={i}>{s.name}, </strong>
            ))}
          </p>
        </div>
        <div className="md:flex-1 py-4" data-aos="fade-right">
          <h1 className="text-2xl font-bold text-[var(--color-primary)] [text-shadow:2px_1px_1px_var(--shadow)]">
            Education
          </h1>
          {education.map((e, i) => {
            return (
              <div
                key={i}
                className="mt-4 px-3 py-2 border-l-4 border-[var(--shadow)] shadow-[0px_0px_2px_var(--shadow)] cursor-pointer rounded-r-lg   hover:shadow-[2px_0px_3px_var(--shadow)]  transition-shadow duration-500 transition-transform duration-500 hover:scale-102"
              >
                <h1 className="text-xl font-bold text-[var(--color-danger)]">
                  {e.class}
                </h1>
                <h4 className="text-lg text-[var(--color-accent)] font-bold">
                  {e.college}
                </h4>
                <h6 className="text-sm text-[var(--color-text-muted)] font-bold">
                  {e.year}
                </h6>
              </div>
            );
          })}
        </div>
      </div>
      <h1 className="text-2xl text-[var(--color-primary)] pl-2 [text-shadow:2px_1px_1px_var(--shadow)]">
        Skills
      </h1>
      <ul
        className="px-2 py-2 relative md:top-10 lmd:text-xl  lg:top-20 grid grid-cols-3 gap-5 md:grid-cols-5 lg:grid-cols-7"
        data-aos="zoom-out"
        data-aos-duration="500"
      >
        {skills.map((s, i) => {
          return <ProgressBar key={i} name={s.name} value={s.value} />;
        })}
      </ul>
    </section>
  );
};

export default Skills;
