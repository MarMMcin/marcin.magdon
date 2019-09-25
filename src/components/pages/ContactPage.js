import React from "react";
import "../styles/ContactPage.css";
import { Prompt } from "react-router-dom";

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
        <h3>Write me</h3>
        <div className="padd">
          <form
            action="https://formspree.io/em-erce@wp.pl"
            method="POST"
            onSubmit={this.handleSubmit}
          >
            <textarea
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Wpisz wiadomość..."
            />
            <div className="buttonDiv">
              <button>Send</button>
            </div>
          </form>
          <Prompt when={!this.state.isEmpty} message="Are you sure?" />
        </div>
      </div>
    );
  }
}

export default ContactPage;
