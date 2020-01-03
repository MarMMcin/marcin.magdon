import React, { Component } from "react";

import MyComponentsPhotos from "./MyProjectsComponents";
import styled from "styled-components";

const StyledIcon = styled.a`
  color: white;
  font-size: 12px;
  padding: 5px;
  &:hover {
    color: yellow;
  }
`;

const StyledContainer = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

const StyledLinks = styled.a``;
const StyledP = styled.p`
  color: white;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 30%;

  @media (max-width: 768px) {
    width: 80%;
    height: 80%;
  }
`;

const StyledImg = styled.img`
  width: 80%;
  height: 80%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:hover {
    transform: scale(1.05);
  }
`;

class Skills extends Component {
  render() {
    return MyComponentsPhotos.ProjectsImg.map(project => (
      <>
        <StyledDiv>
          <StyledLinks
            target="_blank"
            rel="noopener noreferrer"
            href={project.href}
          >
            <StyledContainer>
              <StyledImg
                className="logo"
                key={project.id}
                src={project.img}
                alt={project.alt}
              />
              <StyledP>{project.text} </StyledP>
            </StyledContainer>
          </StyledLinks>
        </StyledDiv>
      </>
    ));
  }
}

export default Skills;

{
  /* <StyledIcon
target="_blank"
rel="noopener noreferrer"
href="https://github.com/MarMMcin/addadvert"
>
<i className="fab fa-github"></i>
</StyledIcon> */
}
