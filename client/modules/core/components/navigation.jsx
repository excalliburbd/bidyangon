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
      <NavItem eventKey={1} href="/dashboard">Dashborad</NavItem>
      <NavItem eventKey={2} href="/courses">Courses</NavItem>

    </Nav>
  </Navbar>
);

export default Navigation;
