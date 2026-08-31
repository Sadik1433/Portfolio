import resume from './Sadik Resume.pdf';

const resumeData = {
  name: "Mahammad Sadik Shaik",
  title: "Software Developer",
  phone: "7799023364",
  email: "sadikshaik6885@gmail.com",
  linkedin: "linkedin.com/in/sadik1433",
  github: "github.com/Sadik1433",
  pdfPath: resume,
  education: [
    {
      school: "Nxtwave Disruptive Technologies",
      detail: "Industry Ready Certification in Java Full-Stack Development",
      period: "Mar 2024 — Ongoing",
    },
    {
      school: "Shri Gnanambica Degree College, Madanapalli",
      detail: "B.Com, Commerce — 7.4 CGPA",
      period: "2021 — 2023",
    },
    {
      school: "Sri Siddartha Junior College, Madanapalli",
      detail: "Intermediate, CEC — 6.2 CGPA",
      period: "2018 — 2020",
    },
    {
      school: "Municipal Hope High School, Madanapalli",
      detail: "Secondary School Certificate — 8.7 CGPA",
      period: "2017 — 2018",
    },
  ],
  skills: {
    Frontend: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js"],
    Backend: ["Python", "Java", "SpringBoot"],
    Databases: ["SQLite"],
    Other: ["Flexbox", "Git", "Linux"],
  },
  projects: [
    {
      name: "Nxt Trendz",
      tagline: "E-commerce clone in the spirit of Amazon and Flipkart",
      link: "shopee1433.ccbp.tech",
      points: [
        "Login, product listing, and product-detail routes built with React Router",
        "Query-parameter search, filters, and sort on top of REST product APIs",
        "JWT-backed sessions persisted in local storage and attached to every request",
      ],
      stack: ["React", "JS", "CSS", "Bootstrap", "REST API", "JWT"],
    },
    {
      name: "Jobby App",
      tagline: "Job board with authenticated search and filtering",
      link: "job1433.ccbp.tech",
      points: [
        "Login, home, jobs, and job-detail views with protected routing",
        "Search by title plus filters for salary range and employment type",
        "Unauthenticated visits to protected routes redirect back to login",
      ],
      stack: ["React", "JS", "CSS", "Bootstrap", "REST API", "JWT"],
    },
    {
      name: "Emoji Game",
      tagline: "A memory challenge built from emoji tiles",
      link: "emoji1433.ccbp.tech",
      points: [
        "Component-driven game loop using lists, event listeners, and conditional rendering",
        "CSS polish for feedback states and win conditions",
      ],
      stack: ["React", "CSS"],
    },
  ],
};
export default resumeData