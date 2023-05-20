import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => (
  <>
    <h1 className="header">Chuck & Hannah</h1>
    <NavBar />
    <Outlet />
  </>
);

export default Layout;
