import React, { Component } from "react";
import BackgroundImg from "./images/aboutimg.png";
import MailImg from "./images/emailabout.png";
import InstaImg from "./images/instagramabout.png";
import FacebookImg from "./images/facebookabout.png";
import "./CTFPublicAbout.css";

import Navbar from "./pages/Navbar";

import "./CTFPublicLandingPage.css";
import MediaQuery from "react-responsive";
import CTFPublicLandingPage from "./CTFPublicLandingPage";

class CTFPublicAbout extends Component {
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
              <div className='ctfpublic-about-maincontainer'>
                <div className='ctfpublic-about-container'>
                  <div>
                    <p className='ctfpublic-about-heading ctfpublic-about-font1'>
                      About Us
                    </p>
                    <p className='ctfpublic-about-text ctfpublic-about-font2'>
                      Lorem ipsum dolor sit amet, consec adipiscing eli
                      consectetuer adipiscing eli cons. Lorem ipsum dolor sit
                      amet, consec adipiscing eli cons eli consectetuer
                      adipiscing eli cons. Lorem
                    </p>
                    <p className='ctfpublic-about-learnmore ctfpublic-about-font3'>
                      Learn More
                    </p>
                  </div>
                  <img
                    src={BackgroundImg}
                    className='ctfpublic-about-backimg'
                  />
                </div>
                <div className='ctfpublic-about-container2'>
                  <div className='ctfpublic-about-container3'>
                    <div className='ctfpublic-about-imgcontainer'>
                      <img src={MailImg} />
                    </div>
                    <p className='ctfpublic-about-text2 ctfpublic-about-font2'>
                      Lorem ipsum dolor sit amet, consec adipiscing eli
                      consectetuer a Lorem
                    </p>
                  </div>
                  <div className='ctfpublic-about-container3'>
                    <div className='ctfpublic-about-imgcontainer'>
                      <img src={InstaImg} />
                    </div>
                    <p className='ctfpublic-about-text2 ctfpublic-about-font2'>
                      Lorem ipsum dolor sit amet, consec adipiscing eli
                      consectetuer a Lorem
                    </p>
                  </div>
                  <div className='ctfpublic-about-container3'>
                    <div className='ctfpublic-about-imgcontainer'>
                      <img src={FacebookImg} />
                    </div>
                    <p className='ctfpublic-about-text2 ctfpublic-about-font2'>
                      Lorem ipsum dolor sit amet, consec adipiscing eli
                      consectetuer a Lorem
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CTFPublicAbout;
