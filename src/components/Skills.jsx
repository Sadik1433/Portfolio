import ProgressBar from "./ProgressBar";
import { education } from "./data.js";
import { skills } from "./data.js";

const Skills = () => {
  return (
    <section id="skill" className="md:h-auto lg:h-screen w-full px-2 py-4">
      <div className="relative  text-xl text-white flex flex-col gap-10 md:flex-row md:text-xl lg:text-2xl">
        <div className="md:flex-1 px-2" data-aos="fade-left">
          <h1 className="text-2xl font-bold text-[var(--color-primary)] [text-shadow:2px_1px_1px_var(--shadow)]">
            About Me
          </h1>
          <p className="mt-4 text-[16px] text-[var(--color-text-body)] text-pretty  leading-6 md:text-xl lg:text-2xl lg:leading-12">
            I am passionate and self driven software developer with a strong
            interest in web develpoment and problem-solving. I have developed
            projects using modern technolgies such as <br />
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
              <details
                key={i}
                className="mt-4 px-3 py-2 border-l-4 border-[var(--shadow)] shadow-[0px_0px_2px_var(--shadow)] cursor-pointer rounded-r-lg   hover:shadow-[2px_0px_3px_var(--shadow)]  transition-shadow duration-500 transition-transform duration-500 hover:scale-102"
              >
                <summary className="text-xl text-[var(--shadow)]">{e.head}</summary>
                <h2 className="text-xl font-bold text-[var(--color-danger)]">
                  {e.class}
                </h2>
                <h3 className="text-lg text-[var(--color-accent)] font-bold">
                  {e.college}
                </h3>
                <h6 className="text-sm text-[var(--color-text-muted)] font-bold">
                  {e.year}
                </h6>
              </details>
            );
          })}
        </div>
      </div>
      <ul
        className="px-2 py-2 relative md:top-10 md:text-xl lg:top-20 grid grid-cols-3 gap-5 md:grid-cols-5 lg:grid-cols-7"
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
