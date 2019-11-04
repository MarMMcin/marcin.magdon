import React from "react";

import "../styles/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <h4>
        © Marcin Magdoń, 2019{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/MarMMcin/marcin.magdon"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/marcin-magdoń-255707193/"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </h4>
    </div>
  );
};

export default Footer;
