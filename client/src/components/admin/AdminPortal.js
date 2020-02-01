import React from "react";
import { AuthConsumer } from "../../providers/AuthProvider";
import {
  Button,
  FullWidthInput
} from "../../styled_components/form_components/main";
import { Header, Box } from "../../styled_components/main";
import Flash from "../Flash";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    loginFailed: false
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.auth.handleLogin({ email, password }, this.props.history);
    this.setState({ loginFailed: true });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password, loginFailed } = this.state;

    return (
      <Box>
        <div style={{ textAlign: "center", marginBottom: "1.5%" }}>
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
        {loginFailed && (
          <Flash
            success={!loginFailed}
            message={"The username or password was not correct"}
          >
            The username or password was not correct
          </Flash>
        )}
      </Box>
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
