import React, { Component } from "react";

import HelpImg from "./images/helpsupport.png";
import MailImg from "./images/email.png";
import "./CTFPublicHelp.css";

import Navbar from "./pages/Navbar";

import "./CTFPublicLandingPage.css";
import MediaQuery from "react-responsive";
import CTFPublicLandingPage from "./CTFPublicLandingPage";

class CTFPublicHelp extends Component {
  state = {};
  render() {
    return (
      <>
        <MediaQuery minWidth={961}>
          <Navbar show={false} />
        </MediaQuery>
        <MediaQuery maxWidth={960}>
          <Navbar show={true} />
        </MediaQuery>

        <div className='ctfpublic-landing-maincontainer'>
          <div className='ctfpublic-landing-container'>
            <CTFPublicLandingPage />

            <div className='ctfpublic-landing-content'>
              <div className='ctfpublic-help-maincontainer'>
                <div className='ctfpublic-help-container'>
                  <div>
                    <p className='ctfpublic-help-heading ctfpublic-help-font1'>
                      Help Desk Support
                    </p>
                    <p className='ctfpublic-help-text ctfpublic-help-font2'>
                      Lorem ipsum dolor sit amet, consec adipiscing eli
                      consectetuer adipiscing eli cons. Lorem ipsum dolor sit
                      amet, consec adipiscing eli cons eli consectetuer
                      adipiscing eli cons. Lorem
                    </p>
                    <div style={{ display: "flex" }}>
                      <div className='ctfpublic-help-email'>
                        <img
                          src={MailImg}
                          className='ctfpublic-help-emailimg'
                        />
                        <p className='ctfpublic-help-emailtext ctfpublic-help-font3'>
                          hacker@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <img src={HelpImg} className='ctfpublic-help-image' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CTFPublicHelp;
