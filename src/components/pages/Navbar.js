import React, { useState } from "react";
import { Link } from "react-scroll";
import { Link as OtherLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/logo.png";

import { Button } from "./Button";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

function Navbar({ show }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className='navbar'>
          <div className='navbar-container container'>
            <Link
              to='home'
              offset={0}
              spy={true}
              smooth={true}
              duration={500}
              className='navbar-logo'
              onClick={closeMobileMenu}
            >
              <img src={logo} />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            {show === true && (
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className='nav-items'>
                  <OtherLink
                    to='/dashboard'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Dashboard
                  </OtherLink>
                </li>
                <li className='nav-items'>
                  <OtherLink
                    to='/machines'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Machines
                  </OtherLink>
                </li>
                <li className='nav-items'>
                  <OtherLink
                    to='/challenges'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Challenges
                  </OtherLink>
                </li>
                <li className='nav-items'>
                  <OtherLink
                    to='/rank'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Ranking
                  </OtherLink>
                </li>
                <li className='nav-items'>
                  <OtherLink
                    to='/participated'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Participated
                  </OtherLink>
                </li>
                <li className='nav-items'>
                  <OtherLink
                    to='/subscription'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Subscription
                  </OtherLink>
                </li>
                <li className='nav-items'>
                  <OtherLink
                    to='/discord'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Social
                  </OtherLink>
                </li>
                <li className='nav-items'>
                  <OtherLink
                    to='/about'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    About
                  </OtherLink>
                </li>
                <li className='nav-items'>
                  <OtherLink
                    to='/'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Settings
                  </OtherLink>
                </li>
                <li className='nav-items'>
                  <OtherLink
                    to='/help'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Help
                  </OtherLink>
                </li>
                <li className='nav-items'>
                  <OtherLink className='nav-links' onClick={closeMobileMenu}>
                    <div className='dropdown'></div>
                    <p>b</p>
                  </OtherLink>
                </li>
              </ul>
            )}
            {show === false && (
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className='nav-items'>
                  <OtherLink
                    to='/editprofile'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    <div className='dropdown'></div>
                    <p>b</p>
                  </OtherLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
