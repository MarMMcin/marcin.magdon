import React from "react";
import "./../styles/MyProjects.css";

import estate from "../../images/estate.png";
import bootstrap from "../../images/bootstrap.png";
import weather from "../../images/weather.png";
import lottery from "../../images/lottery.png";
import rzeszow from "../../images/rzeszow.jpg";
import movies from "../../images/movies.png";
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
          <p>
            React, Router{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/MarMMcin/addadvert"
            >
              <i className="fab fa-github"></i>
            </a>
          </p>
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
            <p>
              React, Router, Bootstrap{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/MarMMcin/krzysztof-bootstrap"
              >
                <i className="fab fa-github"></i>
              </a>
            </p>
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
            <p>
              React, JSON{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/MarMMcin/weatherapp"
              >
                <i className="fab fa-github"></i>
              </a>
            </p>
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
            <p>
              Pure JavaScript{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/MarMMcin/lottery"
              >
                <i className="fab fa-github"></i>
              </a>
            </p>
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
              I am admin of 15 780 followers fanpage<br></br> and 5004 members
              Facebook Group, both about the history of Rzeszów.
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/groups/178523919544167/"
              >
                <i className="fas fa-users"></i>
              </a>
            </p>
          </div>
        </div>{" "}
        <div className="project_photos-6">
          <div className="with_p">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://marmmcin.github.io/MoviesApp"
            >
              <img className="img_inside" src={movies} alt="" />
            </a>
            <p>
              React, Redux, Router, JSON, Bootstrap{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/MarMMcin/MoviesApp"
              >
                <i className="fab fa-github"></i>
              </a>
            </p>{" "}
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkills;
