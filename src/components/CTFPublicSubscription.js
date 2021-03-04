import React, { Component } from "react";

import SubsComponent from "./SubsComponent";

import Navbar from "./pages/Navbar";

import "./CTFPublicLandingPage.css";
import MediaQuery from "react-responsive";
import CTFPublicLandingPage from "./CTFPublicLandingPage";

import "./CTFPublicSubscription.css";

class CTFPublicSubscription extends Component {
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
              <div className='ctfpublic-sub-maincontainer'>
                <SubsComponent />
                <SubsComponent />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CTFPublicSubscription;
