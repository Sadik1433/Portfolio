import Progress from "../Progress";
import SkillDescription from "../SkillDescription";
import SkillIcon from "../SkillIcon";

function SkillContainer() {
  return (
        <section id="skill" className="min-h-screen">
          <div className="mainContainer relative  h-screen md:flex flex-col">
            <h1 className="text-4xl text-center mask-radial-from-stone-50 border-b-2 border-blue-50 shadow-m">
              Skills
            </h1> 
            <div className="relative  flex flex-col md:top-10" >
              <div className="flex flex-col md:flex-row">
                <div className="">
                  <SkillDescription />
                </div>
                <div className="">
                  <Progress />
                </div>
              </div>
              <div className="">
              <SkillIcon />
              </div>
            </div>
          </div>
        </section>
  );
}

export default SkillContainer;
