import Education from "../Education";
import SkillsBlog from "../SkillBlog";
import SkillDescription from "../SkillDescription";
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
          <SkillsBlog />
        </div>
      </div>
    </section>
  );
}

export default SkillContainer;
