import React from "react";
import { TbPinned, TbMail } from "react-icons/tb";
import { IconContext } from "react-icons";

export default function Contact() {
  return (
    <div>
      <div className="contact" id="contact">
        <div className="contact-title">
          <h1 className="contact-main">Contact me!</h1>
          <p>For any enquires. </p>
        </div>
        <div className="location">
          <p className="contact-p">
            <span>
              <TbPinned className="contact-icon"/>
            </span>
            <br />
            United Kingdom
          </p>
        </div>
        <div className="email">
          <p className="contact-p2">
            <span>
              <TbMail className="contact-icon" />
            </span>{" "}
            <br />
            <a className="mail" href="mailto:lewiskeeble98@gmail.com">lewiskeeble98@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
