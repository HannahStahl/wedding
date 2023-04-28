import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/logistics">Logistics</Link>
    <Link to="/rsvp">RSVP</Link>
    <Link to="/registry">Registry</Link>
  </nav>
);

export default NavBar;
