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
const Service = () => {
  return (
    <section id="service">
      <div className="relative h-screen text-white px-2">
        <h1 className="text-5xl font-bold text-center">Services</h1>
        <ul className="flex flex-col gap-8 text-1xl md:text-2xl mt-8">
          {services.map((s, i)=>{
            return(
              <li key={i} className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold text-[var(--color-primary)]">
                  {i + 1}. {s.name} :-
                </h1>
                <p className="pl-8 ">{s.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  );
};

export default Service;
