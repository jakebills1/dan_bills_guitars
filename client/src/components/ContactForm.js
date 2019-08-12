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
    flash: "Message",
    showFlash: true,
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
              <Label>
                Your Email:
                <Input
                  type="email"
                  required
                  onChange={this.handleChange}
                  name="email"
                  value={email}
                />
              </Label>
            </div>
            <div>
              <Label>
                Your name:
                <Input
                  required
                  onChange={this.handleChange}
                  name="name"
                  value={name}
                />
              </Label>
            </div>
          </FormGroup>
          <div>
            <Label>
              Subject:
              <Input
                name="subject"
                value={subject}
                onChange={this.handleChange}
                required
                style={{ width: "100%" }}
              />
            </Label>
          </div>
          <div>
            <Label>
              Your message:
              <Textarea
                required
                onChange={this.handleChange}
                name="body"
                value={body}
              />
            </Label>
          </div>
          <div style={{ textAlign: "center" }}>
            <button>Submit</button>
          </div>
        </form>
      </>
    );
  }
}
export default ContactForm;
const Label = styled.label`
  display: block;
  font-family: inherit;
`;
const Input = styled.input`
  width: 550px;
  display: block;
  border: none;
  border-radius: 3px;
  line-height: 200%;
`;
const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Textarea = styled.textarea`
  width: 100%;
  display: block;
  border: none;
  resize: none;
  border-radius: 3px;
  line-height: 200%;
`;
