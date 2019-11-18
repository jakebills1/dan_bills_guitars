import React, { Component } from "react";
import Dropzone from "./Dropzone";
import axios from "axios";
import {
  Input,
  FormGroup,
  Button,
  Textarea
} from "../../styled_components/form_components/main";
import { Header, Box } from "../../styled_components/main";

class Edit extends Component {
  state = {
    name: this.props.location.state.name,
    price: this.props.location.state.price,
    description: this.props.location.state.description,
    files: [],
    redirect: false
  };
  handleSubmit = e => {
    e.preventDefault();
    const gtr = {
      name: this.state.name,
      price: this.state.price,
      description: this.state.description
    };
    const { files } = this.state;
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
    if (files.length > 0) {
      let data = new FormData();
      files.map((file, index) => {
        return data.append(`file${index}`, file);
      });
      axios.post(`/api/guitars/${id}/pictures`, data);
    }
    goBack();
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  addFile = file => {
    const { files } = this.state;
    this.setState({ files: [...files, file] });
  };
  render() {
    return (
      <Box>
        <form onSubmit={this.handleSubmit}>
          <Header>Edit Listing: </Header>
          <FormGroup>
            <Input
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <Input
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Textarea
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <div style={{ textAlign: "center" }}>
            <Button>Submit</Button>
          </div>
        </form>
        <Dropzone addFile={this.addFile} />
      </Box>
    );
  }
}
export default Edit;
