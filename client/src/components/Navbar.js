import React from "react";
import { AuthConsumer } from "../providers/AuthProvider";
import { Menu, Image, Dropdown, Icon, Sidebar } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import Logo from "../assets/new_logo_transparent.png";

class Navbar extends React.Component {
  state = {
    visible: false
  };
  rightNavItems = () => {
    const {
      auth: { user, handleLogout }
    } = this.props;

    if (user) {
      return (
        <Menu.Menu position="right">
          <Menu.Item
            name="dashboard"
            id="dashboard"
            active={this.props.location.pathname === "/dashboard"}
          >
            <Link to="/dashboard" style={styles.link}>
              Dashboard
            </Link>
          </Menu.Item>
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
    const {
      auth: { handleLogout, user }
    } = this.props;
    return window.innerWidth > 500 ? (
      <div>
        <Menu stackable style={{ backgroundColor: "#954520" }}>
          <Menu.Item>
            <Image src={Logo} avatar />
          </Menu.Item>
          <Menu.Item
            name="home"
            id="home"
            active={this.props.location.pathname === "/"}
          >
            <Link to="/" style={styles.link}>
              Home
            </Link>
          </Menu.Item>
          <Menu.Item
            name="gallery"
            id="gallery"
            active={this.props.location.pathname === "/gallery"}
          >
            <Link to="/gallery" style={styles.link}>
              Gallery
            </Link>
          </Menu.Item>
          <Menu.Item
            name="contact"
            id="contact"
            active={this.props.location.pathname === "/contact"}
          >
            <Link to="/contact" style={styles.link}>
              Contact
            </Link>
          </Menu.Item>
          {this.rightNavItems()}
        </Menu>
      </div>
    ) : (
      <>
        <div
          style={{
            backgroundColor: "#954520",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <Image src={Logo} size="tiny" />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Icon
              name="bars"
              size="big"
              onClick={() => this.setState({ visible: !this.state.visible })}
            />
          </div>
        </div>
        <Sidebar
          as={Menu}
          visible={this.state.visible}
          vertical
          style={{ backgroundColor: "#954520" }}
          onClick={() => this.setState({ visible: !this.state.visible })}
        >
          <Menu.Item
            name="home"
            id="home"
            active={this.props.location.pathname === "/"}
          >
            <Link to="/" style={styles.link}>
              Home
            </Link>
          </Menu.Item>
          <Menu.Item
            name="gallery"
            id="gallery"
            active={this.props.location.pathname === "/gallery"}
          >
            <Link to="/gallery" style={styles.link}>
              Gallery
            </Link>
          </Menu.Item>
          <Menu.Item
            name="contact"
            id="contact"
            active={this.props.location.pathname === "/contact"}
          >
            <Link to="/contact" style={styles.link}>
              Contact
            </Link>
          </Menu.Item>
          {user && (
            <>
              <Menu.Item
                name="dashboard"
                id="dashboard"
                active={this.props.location.pathname === "/dashboard"}
              >
                <Link to="/dashboard" style={styles.link}>
                  Dashboard
                </Link>
              </Menu.Item>
              <Menu.Item
                name="logout"
                onClick={() => handleLogout(this.props.history)}
              />
            </>
          )}
        </Sidebar>
      </>
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
const styles = {
  link: {
    color: "black",
    textDecoration: "none"
  }
};
