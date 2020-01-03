import React from "react";
import { Prompt } from "react-router-dom";
import styled from "styled-components";

import StyledH1 from "../StylesComponents";
const StyledForm = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  padding-top: 5vh;
`;
const StyledTextArea = styled.textarea`
  padding: 5px;
  font-size: 16px;
  width: 40%;
  min-height: 200px;
  margin: 20px 0;
  line-height: 1.6;
`;
const StyledButton = styled.button`
  padding: 18px 40px;
  background-color: rgba(249, 212, 125, 1);
  color: #24252a;
  text-transform: lowercase;
  border: none;
  font-size: 20px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  &:hover {
    background-color: rgba(224, 190, 112, 0.8);
  }
`;

class ContactPage extends React.Component {
  state = {
    value: "",

    isEmpty: true
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      value: "",
      isEmpty: true
    });
  };

  handleChange = e => {
    if (e.target.value.length > 0) {
      this.setState({
        value: e.target.value,
        isEmpty: false
      });
    } else {
      this.setState({
        value: e.target.value,
        isEmpty: true
      });
    }
  };

  render() {
    return (
      <div className="contact">
        <StyledH1>Write me</StyledH1>
        <Container>
          <StyledForm
            action="https://formspree.io/em-erce@wp.pl"
            method="POST"
            onSubmit={this.handleSubmit}
          >
            <StyledTextArea
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="type a message..."
            />
            <div className="buttonDiv">
              <StyledButton>Send</StyledButton>
            </div>
          </StyledForm>
          <Prompt when={!this.state.isEmpty} message="Are you sure?" />
        </Container>
      </div>
    );
  }
}

export default ContactPage;
