import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeClassName = 'underline';
  return (
    <section className="nav">
      <div className="logo">
        <div className="logo-container"> <p> Space Traveler&rsquo;s Hub</p> </div>
      </div>
      <nav className="nav-container">
        <ul className="nav-container-items">
          <li>
            <NavLink to="/dragons" className={({ isActive }) => (isActive ? activeClassName : undefined)}> Dragons </NavLink>
          </li>
          <li className="profile">
            <NavLink to="/profile" className={({ isActive }) => (isActive ? activeClassName : undefined)} > My Profiles </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
