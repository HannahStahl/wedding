import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const pages = [
    { page: "/", label: "Home" },
    { page: "/logistics", label: "Logistics" },
    { page: "/story", label: "Our Story" },
    { page: "/rsvp", label: "RSVP" },
    { page: "/registry", label: "Registry" },
  ];
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {pages.map(({ page, label }) => (
            <Nav.Link
              key={page}
              eventKey={page}
              as={NavLink}
              to={page}
              className={({ isActive }) => isActive ? "active" : undefined}
            >
              {label}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
