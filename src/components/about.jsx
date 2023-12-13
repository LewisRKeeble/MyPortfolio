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
            Hello! My name is Lewis and I am a full stack developer. I have
            worked in construction as a electrician since the age of 16. I am
            now a full qualified electrician with many qualifications such as,
            NVQ Level 3, AM2, 18th Edition, ECS gold card.
            <br /> <br />
            In 2023 I found software development and instantly knew this is a
            role i wanted to pursue. Since then in have done courses and
            projects in my spare time to build up my knowledge and my portfolio.
            In the process I have picked up many skills and languages and hope
            this portfolio displays what I can do.
          </p>
        </div>
      </div>
    </div>
  );
}
