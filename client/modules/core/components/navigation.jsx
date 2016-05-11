import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Navigation = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/"><img alt="Bidyangon" src="/icons/favicon.ico" /></a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="/courses">Courses</NavItem>
      <NavItem eventKey={2} href="/about">About</NavItem>
    </Nav>
    <Nav pullRight>
        <NavItem eventKey={3} href="/login">Login</NavItem>
        <NavItem eventKey={4} href="/signup">Sign Up</NavItem>
      </Nav>
  </Navbar>
);

export default Navigation;
