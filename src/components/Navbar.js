import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png'

const Navigation = () => {
  return (
    <div>
    <header>
      <div className="logoContainer">
        <img className="logo" src={logo} alt="logo" />
       <p className='logoP'>Space Travelers' Hub</p>
       </div>
      <ul className='links'>
        <li className="link"><Link to="/" >Display</Link></li>
        <li className="link"><Link to="/Missions" >Missions</Link></li>
        <li className="link"><Link to="/Dragons" >Dragons</Link></li>
        <li className="link">|</li>
        <li className="link"><Link to="/Myprofile" >MyProfile</Link></li>
      </ul>
    </header>  
    <hr />
    </div>
  );
};

export default Navigation;
