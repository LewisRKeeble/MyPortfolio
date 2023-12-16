import React from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [burger, rotateBurger] = useState(false);
  const toggleMenu = () => {
    setIsOpen((open) => !open);
    rotateBurger((rotate) => !rotate);
  };

  return (
    <navbar className="navbar">
      <GiHamburgerMenu
        className={`hamburger ${burger ? "rotate" : ""}`}
        onClick={toggleMenu}
      />
      <div className={`navtext ${isOpen ? "open" : ""}`}>
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
      <div className="burger-menu">
      </div>
    </navbar>
  );
}
