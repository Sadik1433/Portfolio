const services = [
  {
    id: 1,
    name: "Frontend Development",
    description:
      "Building responsive, interactive, and visually appealing websites using modern frontend technologies.",
  },
  {
    id: 2,
    name: "Backend Development",
    description:
      "Developing secure and scalable server-side applications and REST APIs using Java and Spring Boot.",
  },
  {
    id: 3,
    name: "Database Design",
    description:
      "Designing and managing relational databases with efficient query optimization and data organization.",
  },
  {
    id: 4,
    name: "Responsive Web Design",
    description:"Creating websites that provide seamless user experiences across desktops, tablets, and mobile devices.",
  },
  {
    id: 5,
    name: "API Integration",
    description:"Connecting frontend applications with backend services through RESTful APIs."
  },
];

const animate = [
  "fade-up",
  "fade-down",
  "fade-left",
  "fade-right",
  "zoom-in",
  "zoom-out",
  "flip-left",
  "flip-right",
];

const Service = () => {
  return (
    <section id="service">
      <div className="relative  md:h-auto  lg:h-screen px-4 py-5">
        <h1 className="text-3xl font-bold   text-[var(--color-primary)] [text-shadow:2px_2px_3px_var(--shadow)]">Services</h1>
        <ul className="flex flex-col gap-8 text-1xl md:text-2xl mt-8">
          {services.map((s, i)=>{
            return(
              <li key={i} 
              data-aos={animate[i % animate.length]} 
               className="flex flex-col gap-2 text-[var(--color-text-body)]">
                <h1 className="text-2xl font-bold text-[var(--color-primary)]">
                  {i + 1}. {s.name} :-
                </h1>
                <p className="pl-8 text-xl">{s.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  );
};

export default Service;
