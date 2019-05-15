import React from 'react';
import axios from 'axios';
import { Form, } from 'semantic-ui-react';
class AdminPortal extends React.Component{
  state = { email: "", password: "", };
  handleChange = ({ target: { name, value, }}) => {
    this.setState({ [name]: value});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    axios.get("/api/admins/sign_in")
      .then( res => console.log(res))
      .catch( err => console.log(err))
    this.props.history.push("/");
  }
  render(){

  return (
    <Form onSubmit={this.handleSubmit}>
      <Form.Input
        name="email"
        label="Email: "
        placeholder="Email"
        required
        onChange={this.handleChange}
        value={this.state.email}
      />
      <Form.Input
        name="password"
        label="Password: "
        placeholder="Password"
        type="password"
        required
        onChange={this.handleChange}
        value={this.state.password}
      />
      <Form.Button>Submit</Form.Button>
    </Form>
  );
  };
}
export default AdminPortal;

