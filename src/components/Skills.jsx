import ProgressBar from "./ProgressBar";
import { education } from "./assets/data.js";
import { skills } from "./assets/data.js";

const Skills = () => {
  return (
    <section id="skill" className="w-full min-h-screen py-10 px-4 md:px-6 lg:px-12 flex items-center justify-center">
      <div className="w-full  flex flex-col gap-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* About Me card */}
          <div
            className="bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-2xl p-6 shadow-xl shadow-[var(--color-card-shadow)] flex flex-col gap-4"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            <h2 className="text-2xl font-extrabold text-[var(--color-primary)] flex items-center gap-2">
              About Me
            </h2>
            <div className="border-t border-[var(--color-card-border)]"></div>

            <p className="text-[var(--color-text-muted)] text-[20px] md:leading-10">
              I am passionate and self-driven software developer with a strong
              interest in web development and problem-solving. I have developed
              projects using modern technologies such as

              {skills.map((s, i) => (
                <strong key={i} className="text-[var(--color-primary)] text-[20px] ">
                  {s.name}{i < skills.length - 1 ? ", " : "."}
                  {i === 2 ? <br></br> : ""}
                </strong>
              ))}

            </p>
          </div>

          {/* Education card */}
          <div
            className="bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-2xl p-6 shadow-xl shadow-[var(--color-card-shadow)] flex flex-col gap-4"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            <h2 className="text-2xl font-extrabold text-[var(--color-primary)] flex items-center gap-2">
              Education
            </h2>
            <div className="border-t border-[var(--color-card-border)]"></div>
            <div className="flex flex-col gap-3">
              {education.map((e, i) => (
                <details
                  key={i}
                  className="px-4 py-3 border-l-4 border-[var(--color-primary)] bg-[var(--color-link-bg)] border border-[var(--color-card-border)] cursor-pointer rounded-xl hover:shadow-md hover:shadow-[var(--color-card-shadow)] transition-all duration-300 group hover:translate-y-1.5"
                >
                  <summary className="text-base font-bold text-[var(--color-primary)] list-none flex items-center justify-between">
                    {e.head}
                    <span className="text-[var(--color-text-muted)] text-xs group-open:rotate-180 transition-transform duration-300">▾</span>
                  </summary>
                  <div className="mt-2 flex flex-col gap-1">
                    <h3 className="text-sm font-bold text-[var(--color-text-body)]">
                      {e.class}
                    </h3>
                    <p className="text-xs font-semibold text-[var(--color-accent)]">
                      {e.college}
                    </p>
                    <span className="text-[10px] text-[var(--color-text-muted)] font-semibold uppercase tracking-wider">
                      {e.year}
                    </span>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom — Skills Progress Bars */}
        <div
          className="bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-2xl p-6 shadow-xl shadow-[var(--color-card-shadow)]"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <h2 className="text-2xl font-extrabold text-[var(--color-primary)] mb-4">
            Skills
          </h2>
          <div className="border-t border-[var(--color-card-border)] mb-6"></div>
          <ul className="grid grid-cols-3 gap-5 md:grid-cols-5 lg:grid-cols-7">
            {skills.map((s, i) => (
              <ProgressBar key={i} name={s.name} value={s.value} />
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;
