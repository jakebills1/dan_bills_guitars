import React from "react";
import { AuthConsumer } from "../providers/AuthProvider";
import { Menu, Image } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import Logo from "../assets/new_logo_transparent.png";

class Navbar extends React.Component {
  rightNavItems = () => {
    const {
      auth: { user, handleLogout }
    } = this.props;

    if (user) {
      return (
        <Menu.Menu position="right">
          <Link to="/dashboard">
            <Menu.Item
              name="dashboard"
              id="dashboard"
              active={this.props.location.pathname === "/dashboard"}
            />
          </Link>
          <Menu.Item
            name="logout"
            onClick={() => handleLogout(this.props.history)}
          />
        </Menu.Menu>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <div style={{ backgroundColor: "#954520" }}>
        <Menu pointing secondary>
          <Menu.Item>
            <Image src={Logo} avatar />
          </Menu.Item>
          <Link to="/">
            <Menu.Item
              name="home"
              id="home"
              active={this.props.location.pathname === "/"}
            />
          </Link>
          <Link to="/gallery">
            <Menu.Item
              name="gallery"
              id="gallery"
              active={this.props.location.pathname === "/gallery"}
            />
          </Link>
          <Link to="/contact">
            <Menu.Item
              name="contact"
              id="contact"
              active={this.props.location.pathname === "/contact"}
            />
          </Link>
          {this.rightNavItems()}
        </Menu>
      </div>
    );
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Navbar {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}

export default withRouter(ConnectedNavbar);
