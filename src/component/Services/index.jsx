import "./index.css";
import { FaCode, FaMobileAlt, FaDatabase, FaLaptopCode, FaPalette, FaPlug } from 'react-icons/fa';


const servicesData = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    description:
      "Building responsive and dynamic user interfaces using React, HTML, and CSS.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Optimization",
    description:
      "Creating mobile-first designs and ensuring cross-device compatibility.",
  },
  {
    icon: <FaDatabase />,
    title: "Backend & Databases",
    description:
      "RESTful APIs and databases using Node.js, Express, and MongoDB.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Full-Stack Projects",
    description:
      "Combining frontend and backend to deliver complete web solutions.",
  },
  {
  icon: <FaPalette />,
  title: 'UI/UX Design',
  description: 'Designing intuitive interfaces and user journeys using Figma and modern trends.',
},
{
  icon: <FaPlug />,
  title: 'API Integration',
  description: 'Connecting to third-party APIs like Google Maps, OpenAI, and more.',
},

];

const Services = () => {
  return (
    <section id="service" data-aos="fade-right">
      <div className="services-section" >
        <h2 className="services-heading">Services</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
