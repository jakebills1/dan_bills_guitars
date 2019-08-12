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
    if (parseInt(status, 10) === 200) {
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
            <div>
              <Input
                placeholder="Your Email..."
                type="email"
                required
                onChange={this.handleChange}
                name="email"
                value={email}
              />
            </div>
            <div>
              <Input
                placeholder="Your name..."
                required
                onChange={this.handleChange}
                name="name"
                value={name}
              />
            </div>
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
  width: 550px;
  display: block;
  border: none;
  border-radius: 3px;
  line-height: 200%;
  margin-bottom: 18px;
`;
export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Textarea = styled.textarea`
  width: 100%;
  display: block;
  border: none;
  resize: none;
  border-radius: 3px;
  line-height: 200%;
  margin-bottom: 18px;
`;
export const Button = styled.button`
  width: 80px;
  height: 40px;
  font-family: inherit;
  background-color: #c76c3f;
  border-radius: 3px;
  border: transparent;
`;
