import React from "react";
import DpLogo from '../../assets/DP_Logo.png';
import BurgerMenu from '../../assets/Wand.png';
import SettingsWheel from '../../assets/Settings.png';
import UserWheel from '../../assets/User.png';
import "./Navbar.css";

function NavbarView() {
  return <nav className="NavbarView">

    <div className="nav-1">
      <img className="burger-menu" src={ BurgerMenu } />
    </div>
    <div className="nav-2">
      <img className="logo" src={ DpLogo } />
      <h1>Sorcerer's Script</h1>
      <input className="input-search" placeholder="Search..."></input>
    </div>
    <div className="nav-3">
      <ul>
        <li className="setting-wheel"><img src={ SettingsWheel } /></li>
        <li className="user-wheel" ><img src={ UserWheel } /></li>
      </ul>
    </div>
  </nav>;
}

export default NavbarView;
