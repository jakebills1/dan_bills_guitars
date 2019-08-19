import React, { Component } from "react";
import axios from "axios";
import { Header } from "./Contact";
import Flash from "./Flash";
import styled from "styled-components";
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
    const successStatus = 200;
    if (parseInt(status, 10) === successStatus) {
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
        <form onSubmit={this.handleSubmit}>
          <Header>Send us a Message: </Header>
          <FormGroup>
            <LeftInput
              placeholder="Your Email..."
              type="email"
              required
              onChange={this.handleChange}
              name="email"
              value={email}
            />
            <RightInput
              placeholder="Your name..."
              required
              onChange={this.handleChange}
              name="name"
              value={name}
            />
          </FormGroup>
          <div>
            <Input
              placeholder="Subject..."
              name="subject"
              value={subject}
              onChange={this.handleChange}
              required
              style={{ width: "100%" }}
            />
          </div>
          <div>
            <Textarea
              placeholder="Your message..."
              required
              onChange={this.handleChange}
              name="body"
              value={body}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <Button>Submit</Button>
          </div>
        </form>
      </>
    );
  }
}
export default ContactForm;
export const Input = styled.input`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  display: block;
  border: none;
  border-radius: 0.2em;
  line-height: 200%;
  margin-bottom: 1.6%;
  padding-left: 0.5%;
`;
export const LeftInput = styled(Input)`
  margin-right: 0.5%;
`;
export const RightInput = styled(Input)`
  margin-left: 0.5%;
`;
export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const Textarea = styled.textarea`
  width: 100%;
  display: block;
  border: none;
  resize: none;
  border-radius: 0.2em;
  line-height: 200%;
  margin-bottom: 1.6%;
  padding-left: 0.5%;
`;
export const Button = styled.button`
  width: 7%;
  height: 3em;
  font-family: inherit;
  background-color: #c76c3f;
  border-radius: 0.2em;
  border: transparent;
`;
