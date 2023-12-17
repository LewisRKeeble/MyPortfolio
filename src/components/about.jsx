import React from "react";
import desk from "../images/desk.jpg";

export default function About() {
  return (
    <div id="about">
      <div className="about-grid">
        <div className="about-img">
          <img className="desk" src={desk}></img>
        </div>
        <div className="about-me">
          <h1 className="about-title">About me!</h1>
          <p className="about-para">
            Hello, I'm Lewis Keeble, a passionate and driven junior software
            developer with a relentless curiosity for technology and a deep
            commitment to creating innovative solutions. I hold a foundation in key programming languages such
            as: HTML, CSS, JavaScript, React, Next.js, Node.js, PostgreSQL and I
            am always eager to expand my skill set to stay current with the
            ever-evolving tech landscape.
            <br /> <br />
            In addition to technical skills, I prioritize effective
            communication and adaptability. I believe in the power of teamwork
            and am always eager to contribute my skills and learn from others.
            <br />
            <br />
            Before starting my journey in software development I worked in
            construction as an electrician, which i started at the age of 16.
            Through my years in construction I also gained many qualifications
            to become a fully qualified, ECS gold card, electrician.
            Construction also taught me many valuable skills as a person which i
            believe will be valuable through my development career.
            
          </p>
        </div>
      </div>
    </div>
  );
}
