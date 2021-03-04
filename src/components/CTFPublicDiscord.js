import React, { Component } from "react";
import discord from "./images/discord.png";

import Navbar from "./pages/Navbar";

import Gear from "./images/gears.png";
import Challenge from "./images/challengeimg.png";
import Ranking from "./images/rankimg.png";
import Subscription from "./images/subimg.png";
import Social from "./images/socialimg.png";
import Help from "./images/information.png";
import "./CTFPublicLandingPage.css";
import MediaQuery from "react-responsive";
import CTFPublicLandingPage from "./CTFPublicLandingPage";

import "./CTFPublicDiscord.css";

class CTFPublicDiscord extends Component {
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
              <div className='ctfpublic-discord-maincontainer'>
                <div>
                  <p className='ctfpublic-discord-heading ctfpublic-discord-font1'>
                    Discord{" "}
                    <span className='ctfpublic-discord-heading2 ctfpublic-discord-font1'>
                      Link
                    </span>
                  </p>
                  <div className='ctfpublic-discord-imgcontainer'>
                    <img src={discord} />
                    <p className='ctfpublic-discord-description ctfpublic-discord-font2'>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing eli
                      consectetuer adipiscing eli consectetuer adipiscing eli
                      Lorem ipsum dolor sit amet, adipiscing eli conse. Lorem
                      ipsum dolor sit amet, consectetuer adipiscing eli Lorem
                      ipsum dolor sit amet, consectetuer adipiscing eli
                      consectetuer adipiscing eli consectetuer adipiscing eli
                      Lorem ipsum dolor sit amet, adipiscing eli conse. Lorem
                      ipsum dolor sit amet,{" "}
                    </p>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div className='ctfpublic-discord-buttoncontainer'>
                        <p className='ctfpublic-discord-font1'>Join Discord</p>
                      </div>
                    </div>
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

export default CTFPublicDiscord;
