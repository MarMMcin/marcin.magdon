import React, { Component } from "react";
import Projects from "./Projects";
import styled from "styled-components";
import StyledH1 from "../../StylesComponents";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;
  padding-left: 22%;
  padding-right: 22%;
  padding-top: 2%;
  @media (max-width: 1024px) {
    padding-left: 12%;
    padding-right: 12%;
    padding-bottom: 15%;
  }
  @media (max-width: 768px) {
    padding-top: 5%;
    padding-bottom: 10%;
  }
`;

class MyProjects extends Component {
  render() {
    return (
      <>
        <StyledH1>My projects</StyledH1>

        <Container>
          <Projects></Projects>
        </Container>
      </>
    );
  }
}

export default MyProjects;
