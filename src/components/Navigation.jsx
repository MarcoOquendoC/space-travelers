import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => (
  <div className="navbar-container">
    <img className="logo" src={logo} alt="logo" />
    <NavLink to="/" id="home">
      Home
    </NavLink>
  </div>
);

export default Navbar;
