import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => (
  <>
    <h1 className="chuck-and-hannah-header">
      <NavLink to="/">Chuck & Hannah</NavLink>
    </h1>
    <NavBar />
    <Outlet />
  </>
);

export default Layout;
