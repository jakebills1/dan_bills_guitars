import React, { Component } from "react";
import axios from "axios";
import { Header } from "../styled_components/main";
import Flash from "./Flash";
import {
  Input,
  LeftInput,
  RightInput,
  FormGroup,
  Textarea,
  Button
} from "../styled_components/form_components/main";

class ContactForm extends Component {
  state = {
    flash: "",
    showFlash: false,
    success: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    axios
      .post("/api/email", {
        email: data.get("email"),
        body: data.get("body"),
        name: data.get("name"),
        subject: data.get("subject")
      })
      .then(res => this.produceFlash(res.status))
      .catch(err => this.produceFlash(err.status));
    this.setState({
      flash: "",
      showFlash: "",
      success: ""
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
  render() {
    const { flash, showFlash, success } = this.state;
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
              name="email"
            />
            <RightInput placeholder="Your name..." required name="name" />
          </FormGroup>
          <div>
            <Input
              placeholder="Subject..."
              name="subject"
              required
              style={{ width: "100%" }}
            />
          </div>
          <div>
            <Textarea placeholder="Your message..." required name="body" />
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
