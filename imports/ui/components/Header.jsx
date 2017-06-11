import React from 'react';
import { NavLink } from 'react-router-dom';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class Header extends React.Component {
  render() {
    return (
    <Navbar inverse collapse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">ChatWeb</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem divider />
          <NavItem eventKey={1} href="/">Home</NavItem>
          <NavItem eventKey={2} href="/RoomChat">RoomChat</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={3} href="#">Cerrar Sesion</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}
