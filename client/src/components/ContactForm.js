import React, { Component, } from 'react';
import axios from 'axios';
import {Header, Form, } from 'semantic-ui-react';
class ContactForm extends Component {
  state = { email: "", message: "", name: ""}
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, message, name, } = this.state;
    axios.post("/api/email", { email, message, name }).then( res => console.log(res)).catch(err => console.log(err))
    this.setState({ email: "", message: "", name: ""})
  }
  handleChange = ({target: { name, value, }}) => {
    this.setState({ [name]: value, })
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Header as="h1">Send a Message: </Header>
        <Form.Group widths="equal">
          <Form.Input
            type="email"
            label="Your email: "
            required
            onChange={this.handleChange}
            name="email"
            value={this.state.email}
          />
          <Form.Input
            label="Your name: "
            required
            onChange={this.handleChange}
            name="name"
            value={this.state.name}
          />
        </Form.Group>
        <Form.TextArea
          label="Your Message: "
          required
          onChange={this.handleChange}
          name="message"
          value={this.state.message}
        />
        <Form.Button>Send</Form.Button>
      </Form>
    )
  }
}
export default ContactForm;
