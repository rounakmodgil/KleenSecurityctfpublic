import React, { Component } from "react";
import line from "./images/underline.png";
import "./Footer.css";

import facebook from "./images/facebook.png";
import linkedin from "./images/linkedin.png";
import instagram from "./images/instagram.png";
import twitter from "./images/twitter.png";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="about-section" id="about">
        <div className="footer">
          <div className="footer-container">
            <div className="footer-container-1">
              <div className="footer-container-1-heading">
                About KleenSecurity
              </div>
              <div className="footer-container-1-img">
                <img src={line} />
              </div>
              <div className="footer-container-1-text">
                Introduction | Press Release | Members | Teams Careers |
                Certificate | Certificate Validation
              </div>
            </div>

            <div className="footer-container-2">
              <div className="footer-container-2-heading">Social</div>
              <div className="footer-container-2-img">
                <img src={line} />
              </div>
              <div className="footer-container-2-text">
                <img src={facebook} />
                <img src={twitter} />
                <img src={linkedin} />
                <img src={instagram} />
              </div>
            </div>

            <div className="footer-container-3">
              <div className="footer-container-3-heading">Contact</div>
              <div className="footer-container-3-img">
                <img src={line} />
              </div>
              <div className="footer-container-3-text">
                info@kleensecurity, 38 XX Place, City, County, PIN 123456
              </div>
            </div>
          </div>
          <div className="footer-container2">
            <div className="footer-container2-text">
              Copyright Kleen Security 2020
            </div>
            <div className="footer-container2-text">
              Acceptable Use Policy | Terms of Service | Privacy Policy
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
