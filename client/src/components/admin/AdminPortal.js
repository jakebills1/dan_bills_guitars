import React from "react";
import { AuthConsumer } from "../../providers/AuthProvider";
import { Input, Button } from "../ContactForm";
import { Header } from "../Contact";
import styled from "styled-components";

class Login extends React.Component {
  state = { email: "", password: "" };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.auth.handleLogin({ email, password }, this.props.history);
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div
        style={{
          backgroundColor: "#bd9476",
          padding: "20px 5px 0 5px",
          height: "100vh"
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "18px" }}>
          <Header>Login</Header>
        </div>
        <form onSubmit={this.handleSubmit}>
          <FullWidthInput
            label="Email"
            autoFocus
            required
            name="email"
            value={email}
            placeholder="Email"
            onChange={this.handleChange}
          />
          <FullWidthInput
            label="Password"
            required
            name="password"
            value={password}
            placeholder="Password"
            type="password"
            onChange={this.handleChange}
          />
          <div style={{ textAlign: "center" }}>
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}
const FullWidthInput = styled(Input)`
  box-sizing: border-box;
  width: 100%;
`;
