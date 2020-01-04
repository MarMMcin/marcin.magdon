import React, { Component } from "react";
import Skills from "./Skills";
import styled from "styled-components";
import StyledH1 from "../../StylesComponents";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 2vw;
  padding-left: 25vw;
  padding-right: 25vw;
  position: absolute;
  @media (max-width: 768px) {
    padding-left: 25vw;
    padding-right: 25vw;
  }
`;

const StyledH2 = styled.h2`
  font-size: 2.3vh;
  margin: 3vw 20vw 0 20vw;
  text-align: center;
  color: #edf0f1;
`;

class MySkills extends Component {
  render() {
    return (
      <>
        <StyledH1>My skills</StyledH1>
        <StyledH2>Front-end</StyledH2>
        <Container>
          <Skills></Skills>
        </Container>
      </>
    );
  }
}

export default MySkills;
