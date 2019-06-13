import React, { Component } from "react";
import axios from "axios";
import { Header, Form } from "semantic-ui-react";
import Flash from "./Flash";
class ContactForm extends Component {
  state = {
    email: "",
    body: "",
    name: "",
    flash: "",
    showFlash: false,
    success: "",
    subject: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    const { email, body, name, subject } = this.state;
    axios
      .post("/api/email", { email, body, name, subject })
      .then(res => this.produceFlash(res.status))
      .catch(err => this.produceFlash(err.status));
    this.setState({
      email: "",
      body: "",
      name: "",
      flash: "",
      showFlash: "",
      success: "",
      subject: ""
    });
  };
  produceFlash = status => {
    if (status == "200") {
      this.setState({ flash: "Message Sent!", showFlash: true, success: true });
    } else {
      this.setState({
        flash:
          "We are experiencing technical difficulties. Please contact us directly. ",
        showFlash: true,
        success: false
      });
    }
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  render() {
    const {
      name,
      email,
      body,
      flash,
      showFlash,
      success,
      subject
    } = this.state;
    return (
      <>
        <br />
        {showFlash && <Flash message={flash} success={success} />}
        <Form onSubmit={this.handleSubmit}>
          <Header>Send us a Message: </Header>
          <Form.Group widths="equal">
            <Form.Input
              type="email"
              label="Your email: "
              required
              onChange={this.handleChange}
              name="email"
              value={email}
            />
            <Form.Input
              label="Your name: "
              required
              onChange={this.handleChange}
              name="name"
              value={name}
            />
          </Form.Group>
          <Form.Input
            label="Subject: "
            name="subject"
            value={subject}
            onChange={this.handleChange}
            required
          />
          <Form.TextArea
            label="Your Message: "
            required
            onChange={this.handleChange}
            name="body"
            value={body}
          />
          <div style={{ textAlign: "center", }}>
            <Form.Button color="brown" >Send</Form.Button>
          </div>
        </Form>
      </>
    );
  }
}
export default ContactForm;
