import React from "react";
import { BiLogoLinkedinSquare, BiLogoGithub } from "react-icons/bi";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Programmer from "../images/Programmer.png";
import handwaving from "../images/handwaving.png";

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "Full stack developer",
      "Front end developer",
      "Back end developer",
    ],
    loop: 0,
  });
  return (
    <div>
      <div className="hero">
        <div className="hero-text">
          <h2 className="intro">
            Hello there!{" "}
            <span>
              <img className="hand" src={handwaving}></img>
            </span>
          </h2>
          <h1 className="main-text">
            My name is Lewis Keeble
          </h1>
          <p className="animated-hero">
            {" "}
            I am a <span className="animated-text">{text}</span>
            <Cursor cursorStyle="_" />
          </p>
          <div className="hero-buttons">
            <button type="button" className="github-button">
              <a className="github-icon" href="https://github.com/LewisRKeeble">
                <BiLogoGithub />
              </a>
            </button>
            <button type="button" className="linkedin-button">
              <a
                className="linkedin-icon"
                href="https://www.linkedin.com/in/lewis-keeble-346228295/"
              >
                <BiLogoLinkedinSquare />
              </a>
            </button>
          </div>
          <div className="skills">
            <p className="skills-name">Tech Stack</p>
            <div className="logo-container">
              <div className="logos">
                <li className="logo-icons">
                  <img
                    src="https://skillicons.dev/icons?i=html"
                    alt="skill-icon"
                  />
                  <p className="logo-text">HTML</p>
                </li>
                <li className="logo-icons">
                  <img
                    src="https://skillicons.dev/icons?i=css"
                    alt="skill-icon"
                  />
                  <p className="logo-text">CSS</p>
                </li>
                <li className="logo-icons">
                  <img
                    src="https://skillicons.dev/icons?i=javascript"
                    alt="skill-icon"
                  />
                  <p className="logo-text">Javascript</p>
                </li>
                <li className="logo-icons">
                  <img
                    src="https://skillicons.dev/icons?i=react"
                    alt="skill-icon"
                  />
                  <p className="logo-text">React</p>
                </li>
                <li className="logo-icons">
                  <img
                    src="https://skillicons.dev/icons?i=nodejs"
                    alt="skill-icon"
                  />
                  <p className="logo-text">Node.js</p>
                </li>
                <li className="logo-icons">
                  <img
                    src="https://skillicons.dev/icons?i=expressjs"
                    alt="skill-icon"
                  />
                  <p className="logo-text">Express.js</p>
                </li>
                <li className="logo-icons">
                  <img
                    src="https://skillicons.dev/icons?i=jquery"
                    alt="skill-icon"
                  />
                  <p className="logo-text">jQuery</p>
                </li>
                <li className="logo-icons">
                  <img
                    src="https://skillicons.dev/icons?i=postgresql"
                    alt="skill-icon"
                  />
                  <p className="logo-text">PostgreSQL</p>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img
            className="animated-image"
            src={Programmer}
            alt="Cartoon Developer"
          ></img>
        </div>
      </div>
    </div>
  );
}
