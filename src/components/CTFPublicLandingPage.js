import React, { Component } from "react";

import Gear from "./images/gears.png";
import Challenge from "./images/challengeimg.png";
import Ranking from "./images/rankimg.png";
import Subscription from "./images/subimg.png";
import Social from "./images/socialimg.png";
import Help from "./images/information.png";
import "./CTFPublicLandingPage.css";
import MediaQuery from "react-responsive";

import { Link } from "react-router-dom";

class CTFPublicLandingPage extends Component {
  render() {
    return (
      <>
        <MediaQuery minWidth={961}>
          <div className='ctfpublic-landing-menu'>
            <Link
              to='/dashboard'
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              <div className='ctfpublic-landing-menu-item'>
                <p className='ctfpublic-landing-font1'>Dashboard</p>
                <img src={Gear} />
              </div>
            </Link>
            <Link
              to='/machines'
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              <div className='ctfpublic-landing-menu-item'>
                <p className='ctfpublic-landing-font1'>Machines</p>
                <img src={Gear} />
              </div>
            </Link>
            <Link
              to='/challenges'
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              <div className='ctfpublic-landing-menu-item'>
                <p className='ctfpublic-landing-font1'>Challenges</p>
                <img src={Challenge} />
              </div>
            </Link>
            <Link
              to='/rank'
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              <div className='ctfpublic-landing-menu-item'>
                <p className='ctfpublic-landing-font1'>Ranking</p>
                <img src={Ranking} />
              </div>
            </Link>
            <Link
              to='/participated'
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              <div className='ctfpublic-landing-menu-item'>
                <p className='ctfpublic-landing-font1'>Participated</p>

                <img src={Ranking} />
              </div>
            </Link>

            <Link
              to='/subscription'
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              <div className='ctfpublic-landing-menu-item'>
                <p className='ctfpublic-landing-font1'>Subscription</p>
                <img src={Subscription} />
              </div>
            </Link>
            <Link
              to='/discord'
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              <div className='ctfpublic-landing-menu-item'>
                <p className='ctfpublic-landing-font1'>Social</p>
                <img src={Social} />
              </div>
            </Link>

            <div className='ctfpublic-landing-menubottom'>
              <Link
                to='/about'
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                <div className='ctfpublic-landing-menu-item'>
                  <p className='ctfpublic-landing-font1'>About</p>
                  <img src={Help} />
                </div>
              </Link>
              <Link
                to='/help'
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                <div className='ctfpublic-landing-menu-item'>
                  <p className='ctfpublic-landing-font1'>Help</p>
                  <img src={Help} />
                </div>
              </Link>
            </div>
          </div>
        </MediaQuery>
      </>
    );
  }
}

export default CTFPublicLandingPage;
