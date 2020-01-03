import React from "react";

import styled from "styled-components";
import StyledH1 from "../StylesComponents";

const StyledH2 = styled.h2`
  margin: 3vw 20vw 0 20vw;
  text-align: left;
  color: #edf0f1;

  @media (max-width: 768px) {
    font-size: 1em;
    margin: 3vw 12vw 0 12vw;
  }
`;

const StyledTittle = styled.div`
  @media (max-width: 768px) {
    padding-top: 2vh;
    text-align: center;
    font-size: 5vh;
  }
`;

const AboutMe = () => {
  return (
    <>
      <StyledTittle>
        <StyledH1>Hello I'm Marcin Magdoń.</StyledH1>
      </StyledTittle>
      <StyledH2>
        I'm front-end web developer from Rzeszów.<br></br> At the high school’s
        IT classes I have created my first web design which developed my
        interest and passion to build websites. After high school graduation I
        have undertaken an university course in spatial planning to follow my
        hobbies. After university graduation, I have returned to the front-end
        web design and built several new positions in completely different
        technologies.
      </StyledH2>
    </>
  );
};

export default AboutMe;
