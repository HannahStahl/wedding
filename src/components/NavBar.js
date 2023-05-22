import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const pages = [
    { page: "/", label: "Home" },
    { page: "/logistics", label: "Logistics" },
    { page: "/rsvp", label: "RSVP" },
    { page: "/registry", label: "Registry" },
  ];
  return (
    <nav>
      {pages.map(({ page, label }) => (
        <NavLink to={page} className={({ isActive }) => isActive ? "active" : undefined}>
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
