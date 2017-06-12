import React from 'react';
import { NavLink } from 'react-router-dom';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class Header extends React.Component {
  render() {
    return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">ChatWeb</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={2} href="/RoomChat">RoomChat</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={3} href="/login">Cerrar Sesion</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}
