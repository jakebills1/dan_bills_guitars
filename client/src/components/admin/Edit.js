import React, { Component } from "react";
import Dropzone from "./Dropzone";
import axios from "axios";
import { Header, Form } from "semantic-ui-react";
class Edit extends Component {
  state = {
    name: this.props.location.state.name,
    price: this.props.location.state.price,
    description: this.props.location.state.description,
    files: []
  };
  handleSubmit = e => {
    e.preventDefault();
    const gtr = {
      name: this.state.name,
      price: this.state.price,
      description: this.state.description
    };
    const {
      location: {
        state: { id }
      },
      history: { goBack }
    } = this.props;
    axios
      .patch(`/api/guitars/${id}`, gtr)
      .then(res => console.log(res))
      .catch(res => console.log(res));
    // add call to pictures controller to add pictures, if files.length > 0
    goBack();
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  addFile = file => {
    debugger;
    const { files } = this.state;
    this.setState({ files: [...files, file] });
  };
  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Header as="h1">Edit Listing: </Header>
          <Form.Group widths="equal">
            <Form.Input
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <Form.Input
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.TextArea
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <Form.Button>Submit</Form.Button>
        </Form>
        <Dropzone addFile={this.addFile} />
      </>
    );
  }
}
export default Edit;
