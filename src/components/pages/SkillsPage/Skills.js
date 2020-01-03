import React, { Component } from "react";

import MySkillsPhotos from "./MySkillsComponent";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: #dddddd;
  margin: 0 1vw;
  width:10vw;
  min-width: 10vw;
  height:10vw;
  border-radius: 50%;
  margin-top: 2vh;
  transition: 0.2s ease;
  position:position: absolute;

  &:hover {
    transform: scale(1.1);
  }
`;
const StyledImg = styled.img`
  position: relative;
  display: inline-block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

class Skills extends Component {
  render() {
    return MySkillsPhotos.SkillsImg.map(logo => (
      <div key={logo.id}>
        <StyledDiv>
          <StyledImg src={logo.img} width="50%" height="50%" alt={logo.alt} />
        </StyledDiv>
      </div>
    ));
  }
}

export default Skills;
