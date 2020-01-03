import React, { Component } from "react";
import MyComponentsPhotos from "./MyProjectsComponents";
import styled from "styled-components";

const StyledLinks = styled.a`
  text-decoration: none;
`;

const StyledIcon = styled.a`
  color: white;
  padding: 3px;
  font-size: 0.8vw;
  &:hover {
    color: rgba(249, 212, 125, 1);
  }
  @media (max-width: 1024px) {
    font-size: 12px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 3px;
  }
`;

const StyledP = styled.p`
  text-align: center;
  font-size: 0.7vw;

  color: white;
  @media (max-width: 1024px) {
    font-size: 12px;
  }
  @media (max-width: 768px) {
    font-size: 9px;
  }
`;

const StyledImg = styled.img`
  width: 15vw;
  height: 15vw;
  padding: 10px;
  border-radius: 20px;
  transition: 0.2s ease;
  @media (max-width: 1024px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
  &:hover {
    transform: scale(1.05);
  }
`;

class Skills extends Component {
  render() {
    return MyComponentsPhotos.ProjectsImg.map(project => (
      <div key={project.id}>
        <StyledLinks
          target="_blank"
          rel="noopener noreferrer"
          href={project.href}
        >
          <StyledImg src={project.img} alt={project.alt}></StyledImg>
        </StyledLinks>{" "}
        <StyledP>
          {project.text}
          <StyledIcon
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/MarMMcin/addadvert"
          >
            <i className="fab fa-github"></i>
          </StyledIcon>
        </StyledP>
      </div>
    ));
  }
}

export default Skills;
