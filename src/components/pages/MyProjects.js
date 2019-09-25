import React from "react";
import "./../styles/MyProjects.css";

import estate from "../../images/estate.png";
import bootstrap from "../../images/bootstrap.png";
import weather from "../../images/weather.png";
import lottery from "../../images/lottery.png";
import rzeszow from "../../images/rzeszow.jpg";
// import rzeszow from "../../images/estate.png";

// import CountUp from "react-countup";
// import { FaThumbsUp, FaUserCheck } from "react-icons/fa";

const MySkills = () => {
  return (
    <>
      <h1>My projects</h1>

      <div className="project_photos">
        <div className="with_p">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://marmmcin.github.io/addadvert/#/"
          >
            <img className="img_inside" src={estate} alt="" />
          </a>
          <p>React, Router</p>
        </div>
        <div className="project_photos-2">
          {" "}
          <div className="with_p">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://marmmcin.github.io/krzysztof-bootstrap/#/"
            >
              <img className="img_inside" src={bootstrap} alt="" />
            </a>
            <p>React, Router, Bootstrap</p>
          </div>
        </div>
        <div className="project_photos-3">
          {" "}
          <div className="with_p">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://marmmcin.github.io/weatherapp/"
            >
              <img className="img_inside" src={weather} alt="" />
            </a>
            <p>React, JSON</p>
          </div>
        </div>
        <div className="project_photos-4">
          {" "}
          <div className="with_p">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://marmmcin.github.io/lottery//"
            >
              <img className="img_inside" src={lottery} alt="" />
            </a>
            <p>Pure JavaScript</p>
          </div>
        </div>
        <div className="project_photos-5">
          {" "}
          <div className="with_p">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/rzeszowwczoraj/"
            >
              <img className="img_inside" src={rzeszow} alt="" />
            </a>
            <p className="fanpage">
              My fanpage (15 780 fallowers) and group (4567 active people) about
              the history of my city
            </p>
          </div>
        </div>{" "}
        <div className="project_photos-6">
          {" "}
          <div className="with_p">
            <img className="img_inside" src={estate} alt="" />
            <p>TEST</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkills;
