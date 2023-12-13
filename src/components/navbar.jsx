import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <navbar className="navbar">
      <div className="navtext">
        <Link
          className="nav"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          About me
        </Link>
        <Link
          className="nav"
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Projects
        </Link>
        <Link
          className="nav"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Contact Me
        </Link>
      </div>
    </navbar>
  );
}
