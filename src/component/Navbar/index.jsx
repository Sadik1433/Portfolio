import "./index.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div>
        <h1>Sadik</h1>
      </div>
      <ul className="list-items">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          activeClass="active"
          className="list-btn"
        >
          <li>Home</li>
        </Link>

        <Link
          to="skill"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          activeClass="active"
          className="list-btn"
        >
          <li>Skill</li>
        </Link>
        <Link
          to="project"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          activeClass="active"
          className="list-btn"
        >
          <li>Project</li>
        </Link>

        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          activeClass="active"
          className="list-btn"
        >
          <li> Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
