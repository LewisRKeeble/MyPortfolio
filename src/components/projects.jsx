import React from "react";
import Weatherapp from "../images/Weatherapp.PNG";
import Lkattire from "../images/Lkattire.PNG";
import { TbBrandGithub, TbExternalLink } from "react-icons/tb";

export default function Projects() {
  return (
    <div>
      <div className="projects-container" id="projects">
        <h1 className="projects-title"> My Projects:</h1>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img className="project-img" src={Lkattire}></img>
            </div>
            <div className="project-text">
              <h2>LK Attire</h2>
              <p>
                A full-stack e-commerce shop for mens smart wear. This project
                is a work in progress, but will allow the user to browse the
                shop, login/register and order.
              </p>
              <div className="projects-stack">
                <p className="p-text">React</p>
                <p className="p-text">Node.js</p>

              </div>
              <div className="project-links">
                <a href="#" className="project-button">
                  Code <TbBrandGithub />
                </a>
                <a href="#" className="project-button">
                  Live Demo <TbExternalLink />
                </a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <a>
                <img></img>
              </a>
            </div>
            <div className="project-text">
              <h2>Title</h2>
              <p>Description</p>
              <div className="projects-stack">
                <p>React</p>
                <p>Css</p>
              </div>
              <div className="projects-links">
                <a href="#"></a>
                <a href="#"></a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <a>
                <img></img>
              </a>
            </div>
            <div className="project-text">
              <h2>Title</h2>
              <p>Description</p>
              <div className="projects-stack">
                <p>React</p>
                <p>Css</p>
              </div>
              <div className="projects-links">
                <a href="#"></a>
                <a href="#"></a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <a>
                <img></img>
              </a>
            </div>
            <div className="project-text">
              <h2>Title</h2>
              <p>Description</p>
              <div className="projects-stack">
                <p>React</p>
                <p>Css</p>
              </div>
              <div className="projects-links">
                <a href="#"></a>
                <a href="#"></a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img className="project-img" src={Weatherapp}></img>
            </div>
            <div className="project-text">
              <h2>Weather App</h2>
              <p>
                My first weather app using weatherapi.com. It is a simple
                displayed app that takes any user input location and gives them
                the current and two more days of weather
              </p>
              <div className="projects-stack">
                <p className="p-text">Node.js</p>
                <p className="p-text">EJS</p>
              </div>
              <div className="project-links">
                <a href="#" className="project-button">
                  Code <TbBrandGithub />
                </a>
                <a href="#" className="project-button">
                  Live Demo <TbExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
