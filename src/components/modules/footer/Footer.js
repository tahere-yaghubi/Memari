import React from "react";

import logo1 from "../../../assets/media/logo1.svg";
import logo2 from "../../../assets/media/logo2.svg";
import logo from "../../../assets/media/logo.svg";
import "./Footer.css";

const Footer = ({ data }) => {
  const {
    questions,
    arrows,
    about_us,
    contact_us,
    blog,
    publications,
    sessions,
    advertising,
  } = data;

  return (
    <div className="footer">
      <div className="container">
        <div className="contact">
          <div className="logo"></div>
          <div className="contact-list">
            <ul>
              <li className="contact-title">
                <a href="">درخواست همکاری</a>
              </li>
              <li>
                <a href="/">{blog}</a>
              </li>
              <li>
                <a href="/">{publications}</a>
              </li>
              <li>
                <a href="/">{sessions}</a>
              </li>
              <li>
                <a href="/">{advertising}</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">{questions}</a>
              </li>
              <li>
                <a href="/">{arrows}</a>
              </li>
              <li>
                <a href="/">{about_us}</a>
              </li>
              <li>
                <a href="/">{contact_us}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="logos">
          <a>
            <img src={logo1} alt="logo1" />
          </a>
          <a>
            <img src={logo2} alt="logo2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
