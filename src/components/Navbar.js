import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './assets/logo.png';

const Navigation = () => {
  const hello = "Space Travelers' Hub";
  return (
    <div>
      <header>
        <div className="logoContainer">
          <img className="logo" src={logo} alt="logo" />
          <p className="logoP">
            {hello}
          </p>
        </div>
        <ul className="links">
          <li className="link"><NavLink to="/">Display</NavLink></li>
          <li className="link"><NavLink to="/Missions">Missions</NavLink></li>
          <li className="link"><NavLink to="/Dragons">Dragons</NavLink></li>
          <li className="link">|</li>
          <li className="link"><NavLink to="/Myprofile">MyProfile</NavLink></li>
        </ul>
      </header>
      <hr />
    </div>
  );
};

export default Navigation;
