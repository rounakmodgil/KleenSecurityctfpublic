import React, { useState } from "react";
import { Link } from "react-scroll";
import { Link as OtherLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/logo.png";

import { Button } from "./Button";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

function Navbar() {
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
        <div className="navbar">
          <div className="navbar-container container">
            <Link
              to="home"
              offset={0}
              spy={true}
              smooth={true}
              duration={500}
              className="navbar-logo"
              onClick={closeMobileMenu}
            >
              <img src={logo} />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-items">
                <Link
                  className="nav-links"
                  activeClass="active"
                  to="individuals"
                  onClick={closeMobileMenu}
                  offset={0}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Individuals
                </Link>
              </li>
              <li className="nav-items">
                <Link
                  className="nav-links"
                  activeClass="active"
                  to="companies"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={closeMobileMenu}
                >
                  Companies
                </Link>
              </li>
              <li className="nav-items">
                <Link
                  className="nav-links"
                  activeClass="active"
                  to="universities"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={closeMobileMenu}
                >
                  Universities
                </Link>
              </li>
              <li className="nav-items">
                <Link
                  to="stores"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Stores
                </Link>
              </li>
              <li className="nav-items">
                <OtherLink
                  to="/login"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  style={{ color: "#ff4d15", marginLeft: "30px" }}
                >
                  Log in
                </OtherLink>
              </li>
              <li className="nav-btn">
                {button ? (
                  <OtherLink
                    to="/joinnow"
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle="btn--outline">Join now</Button>
                  </OtherLink>
                ) : (
                  <OtherLink
                    to="/joinnow"
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      Join now
                    </Button>
                  </OtherLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
