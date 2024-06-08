import React from "react";
import Weatherapp from "../images/Weatherapp.PNG";
import Noteit from "../images/noteit.png";
import Behindthebarbell from "../images/Behindthebarbell.png";
import { TbBrandGithub, TbExternalLink } from "react-icons/tb";

export default function Projects() {
  return (
    <div>
      <div className="projects-container" id="projects">
        <h1 className="projects-title"> My Projects:</h1>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img
                className="project-img"
                src={Noteit}
                alt="project image"
              ></img>
            </div>
            <div className="project-text">
              <h2>Noteit</h2>
              <p>
                A full stack project for note taking. It allows the user to log
                in and sign up with authentication. Users can also add edit and
                delete notes. This app is hosted with AWS.
              </p>
              <div className="projects-stack">
                <p className="p-text">React</p>
                <p className="p-text">Node.js</p>
                <p className="p-text">Postgres</p>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/LewisRKeeble/Noteit?tab=readme-ov-file"
                  className="project-button"
                >
                  Code <TbBrandGithub />
                </a>
                <a href="http://3.8.177.87:3000/" className="project-button">
                  Live Demo <TbExternalLink />
                </a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <a>
                <img className="project-img" src={Behindthebarbell}></img>
              </a>
            </div>
            <div className="project-text">
              <h2>Behind the Barbell</h2>
              <p>
                A project made for a client starting her personal training
                company. It is a multi front end page. I am currently finalising
                parts with the client so isnt hosted but will be in the coming
                months.
              </p>
              <div className="projects-stack">
                <p className="p-text">React</p>
                <p className="p-text">Node.js</p>
              </div>
              <div className="project-links">
                
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
                the current and two more days of weather. Did not make live due
                to API key becoming paid for.
              </p>
              <div className="projects-stack">
                <p className="p-text">React</p>
                <p className="p-text">API</p>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/LewisRKeeble/WeatherIt"
                  className="project-button"
                >
                  Code <TbBrandGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
