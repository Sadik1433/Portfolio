import Education from "../Education";
import SkillDescription from "../SkillDescription";
import SkillIcon from "../SkillIcon";
import "./index.css";

function SkillContainer() {
  return (
    <section id="skill">
      <div className="skill-container">
        <h1 className="skill-head">Skills</h1>
        <div className="skill-display">
          <SkillDescription />
          <Education />
        </div>
        <div className="icon-skill-container">
          <SkillIcon />
        </div>
      </div>
    </section>
  );
}

export default SkillContainer;
