import Project from "../Project";
const blogsdata = [
  {
    id: 1,
    projectName: "Tic-Tac-Toe",
    lang2: "Html",
    lang1: "Css",
    lang3: "JavaScript",
    profileImage:
      "https://res.cloudinary.com/dnarxeess/image/upload/v1744869701/tic-tac_foabmh.jpg",
    link: "https://tic-tac1433.netlify.app/",
  },
  {
    id: 2,
    projectName: "EmojiGame",
    lang2: "Html",
    lang1: "Css",
    lang3: "JavaScript",
    profileImage:
      "https://res.cloudinary.com/dnarxeess/image/upload/v1741363538/emoji_at6n3q.jpg",
    link: "https://emoji1433.ccbp.tech/",
  },
  {
    id: 3,
    projectName: "Job Search",
    lang2: "Html",
    lang1: "Css",
    lang3: "JavaScript",
    profileImage:
      "https://res.cloudinary.com/dnarxeess/image/upload/v1741363587/jobby_ng8zz5.jpg",
    link: "https://job1433.ccbp.tech/login",
  },
  {
    id: 4,
    projectName: "Todolist",
    lang2: "Html",
    lang1: "Css",
    lang3: "JavaScript",
    profileImage:
      "https://res.cloudinary.com/dnarxeess/image/upload/v1741363759/todolist_xrpccx.jpg",
    link: "https://dailytask-123.netlify.app/",
  },
];

const ProjectContainer = () => {
  return (
        <section id="project">
          <div className="mainContainer">
            <div className="border-b-1 border-blue-50 shadow-m shadow-blue-200 p-20px">
              <h1 className=" Skill-head text-center text-5xl text-red-500">
                Projects
              </h1>
            </div>
            <ul className="flex flex-wrap justify-center items-center gap-5 p-3">
              {blogsdata.map((each) => (
                <Project blog={each} key={each.id} />
              ))}
            </ul>
          </div>
        </section>
  );
};

export default ProjectContainer;
