import Progress from "../Progress";
import SkillDescription from "../SkillDescription";
import SkillIcon from "../SkillIcon";

function SkillContainer() {
  return (
        <section id="skill">
          <div className="mainContainer text-center h-screen">
            <h1 className="text-5xl mask-radial-from-stone-50 border-b-2 border-blue-50 shadow-m">
              Skills
            </h1> 
            <div className="flex flex-col">
              <div className="flex flex-row h-100">
                <div className="w-1/2">
                  <SkillDescription />
                </div>
                <div className="w-1/2">
                  <Progress />
                </div>
              </div>
              <div className="h-40 ">
              <SkillIcon />
              </div>
            </div>
          </div>
        </section>
  );
}

export default SkillContainer;
