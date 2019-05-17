import React from 'react';
import { Menu, } from 'semantic-ui-react'
import { Link, withRouter,  } from 'react-router-dom'
const Navbar = (props) => {
  const items = {home: "/", gallery: "/gallery", contact: "/contact", };
  const parseActive = (path, word) => {
    if (props.history.location.pathname === path ){
      return (
        <Menu.Item active>
          {word}
        </Menu.Item>
      );
    } else {
      return (
        <Menu.Item>
          {word}
        </Menu.Item>
      );
    }
  }
  return (
    <Menu>
      <Link to={items.home}>
        {parseActive(items.home, "Home")}
      </Link>
      <Link to={items.gallery}>
        {parseActive(items.gallery, "Gallery")}
      </Link>
      <Link to={items.contact}>
        {parseActive(items.contact, "Contact")}
      </Link>
    </Menu>
  );
}
export default withRouter(Navbar);
