import Project from "../Project";
const blogsdata = [
  {
    id: 1,
    projectName: "Tic-Tac-Toe",
    lang: "Html, css, JavaScript",
    description:'🎮 A fun matching game where players pair similar emojis',
    desc2: 'Timer, score tracker, increasing difficulty',
    lang: 'React, Html, css, JavaScript',
    purpose: 'Practice dynamic rendering and logic',  
    color: 'white',
    profileImage:
      "https://res.cloudinary.com/dnarxeess/image/upload/v1744869701/tic-tac_foabmh.jpg",
    link: "https://tic-tac1433.netlify.app/",
  },
  {
    id: 2,
    projectName: "EmojiGame",
    lang: "Html, css, JavaScript",
    description:'🎮 A fun matching game where players pair similar emojis',
    desc2: 'Timer, score tracker, increasing difficulty',
    lang: 'React, Html, css, JavaScript',
    purpose: 'Practice dynamic rendering and logic',  
     color: 'blue',   
    profileImage:
      "https://res.cloudinary.com/dnarxeess/image/upload/v1741363538/emoji_at6n3q.jpg",
    link: "https://emoji1433.ccbp.tech/",
  },
  {
    id: 3,
    projectName: "Job Search",
    lang: "Html, css, JavaScript",
    description:'🎮 A fun matching game where players pair similar emojis',
    desc2: 'Timer, score tracker, increasing difficulty',
    lang: 'React, Html, css, JavaScript',
    purpose: 'Practice dynamic rendering and logic', 
    color: 'blue', 
    profileImage:
      "https://res.cloudinary.com/dnarxeess/image/upload/v1741363587/jobby_ng8zz5.jpg",
    link: "https://job1433.ccbp.tech/login",
  },
  {
    id: 4,
    projectName: "Todolist",
    lang: "Html, css, JavaScript",
    description:'🎮 A fun matching game where players pair similar emojis',
    desc2: 'Timer, score tracker, increasing difficulty',
    lang: 'React, Html, css, JavaScript',
    purpose: 'Practice dynamic rendering and logic',  
    color: 'blue',
    profileImage:
      "https://res.cloudinary.com/dnarxeess/image/upload/v1741363759/todolist_xrpccx.jpg",
    link: "https://dailytask-123.netlify.app/",
  },
];

const ProjectContainer = () => {
  return (
        <section id="project">
          <div className="mainContainer h-screen">
              <h1 className="text-4xl text-center mask-radial-from-stone-50 border-b-2 border-blue-50 shadow-m">
                Projects
              </h1>
            <ul className="grid grid-cols-1  p-3 gap-20 md:grid-cols-3 ">
              {blogsdata.map((each) => (
                <Project blog={each} key={each.id} />
              ))}
            </ul>
          </div>
        </section>
  );
};

export default ProjectContainer;
