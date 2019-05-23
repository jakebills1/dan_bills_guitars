import React, { Component, } from 'react';
import {Header, Form, } from 'semantic-ui-react';
class ContactForm extends Component {
  state = { email: "", message: ""}
  handleSubmit = (e) => {
    e.preventDefault();
    // send data to server
  }
  handleChange = ({target: { name, value, }}) => {
    this.setState({ [name]: value, })
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Header as="h1">Send a Message: </Header>
        <Form.Input
          type="email"
          label="Your email: "
          required
          onChange={this.handleChange}
          name="email"
          value={this.state.email}
        />
        <Form.TextArea
          label="Your Message: "
          required
          onChange={this.handleChange}
          name="message"
          value={this.state.message}
        />
      </Form>
    )
  }
}
export default ContactForm;
