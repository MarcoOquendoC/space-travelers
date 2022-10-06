import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Navbar.css';
import image from './assets/logo.png';

export default function Navigation() {
  return (
    <nav>
      <div className="logo-holder">
        <img src={image} alt="planet" className="logo" />
        <h2 className="hText">Space Travelers</h2>
      </div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/rockets"
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/missions"
          >
            Mission
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/dragons"
          >
            Dragons
          </NavLink>
        </li>
        <li><hr /></li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/MyProfile"
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
