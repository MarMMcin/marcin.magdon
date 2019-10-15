import React from "react";
import "./../styles/MySkills.css";
import logocss from "../../images/css3.svg";
import github from "../../images/redux.png";
import html5 from "../../images/html5.svg";
import javascript from "../../images/javascript.svg";
import nodejs from "../../images/nodejs.svg";
import reactrouter from "../../images/reactrouter.svg";
import react from "../../images/react.svg";
import sass from "../../images/sass.svg";

const MySkills = () => {
  return (
    <>
      <div className="all" />
      <div className="test">My skills</div>
      <div className="test1">Front-end</div>
      <div className="skils_div">
        <div className="circle">
          <img
            className="logo"
            src={logocss}
            width="50%"
            height="50%"
            alt="css"
          />
        </div>
        <div className="circle">
          <img
            className="logo"
            src={html5}
            width="50%"
            height="50%"
            alt="html5"
          />
        </div>
        <div className="circle">
          <img
            className="logo"
            src={javascript}
            width="50%"
            height="50%"
            alt="javascript"
          />
        </div>
        <div className="circle">
          <img
            className="logo"
            src={react}
            width="50%"
            height="50%"
            alt="react"
          />
        </div>
        <div className="circle">
          <img
            className="logo"
            src={github}
            width="50%"
            height="50%"
            alt="github"
          />
        </div>
        <div className="circle">
          <img
            className="logo"
            src={nodejs}
            width="50%"
            height="50%"
            alt="nodejs"
          />
        </div>
        <div className="circle">
          <img
            className="logo"
            src={reactrouter}
            width="50%"
            height="50%"
            alt="reactrouter"
          />
        </div>
        <div className="circle">
          <img className="logo" src={sass} width="50%" height="50%" alt="css" />
        </div>
      </div>
    </>
  );
};

export default MySkills;
