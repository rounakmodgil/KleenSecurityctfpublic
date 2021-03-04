import React, { Component } from "react";

import Navbar from "./pages/Navbar";

import "./CTFPublicLandingPage.css";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import RankingImg from "./images/dashboardranking.png";
import ReputationImg from "./images/dashboardreputation.png";
import DaysImg from "./images/dashboarddays.png";
import PointImg from "./images/dashboardpoints.png";
import BadgeImg from "./images/badge.png";
import "./CTFPublicDashboard.css";

import CTFPublicLandingPage from "./CTFPublicLandingPage";

const listing = [
  {
    name: "Advance Defender",
    subtext: "Completed 5 machines",
  },
  {
    name: "Advance Defender",
    subtext: "Completed 5 machines",
  },
  {
    name: "Advance Defender",
    subtext: "Completed 5 machines",
  },
];

const listing2 = [
  {
    name: "Reversing",
    percentage: 10,
  },
  {
    name: "Crypto",
    percentage: 10,
  },
  {
    name: "Stego",
    percentage: 10,
  },
  {
    name: "Pwn",
    percentage: 10,
  },
  {
    name: "Web",
    percentage: 10,
  },
  {
    name: "Misc",
    percentage: 10,
  },
  {
    name: "Forensics",
    percentage: 10,
  },
  {
    name: "Mobile",
    percentage: 10,
  },
  {
    name: "OSINT",
    percentage: 10,
  },
  {
    name: "Hardware",
    percentage: 10,
  },
];

class CTFPublicDashboard extends Component {
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
              <div className='ctfpublic-dashboard-maincontainer'>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div className='ctfpublic-dashboard-profilecontainer'>
                    <div className='ctfpublic-dashboard-profile'></div>
                    <div style={{ marginLeft: "10px", marginTop: "10px" }}>
                      <p className='ctfpublic-dashboard-name'>Yoyo420</p>
                      <p className='ctfpublic-dashboard-tag'>Noob</p>
                    </div>
                  </div>
                  <p className='ctfpublic-dashboard-reputation'>
                    Give Reputation
                  </p>
                </div>
                <div className='ctfpublic-dashboard-statsrow'>
                  <div className='ctfpublic-dashboard-statscontainer'>
                    <div className='ctfpublic-dashboard-statsimg'>
                      <img
                        src={RankingImg}
                        className='ctfpublic-dashboard-image'
                      />
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                      <p
                        style={{ marginBottom: "10px" }}
                        className='ctfpublic-dashboard-font1'
                      >
                        120
                      </p>
                      <p className='ctfpublic-dashboard-font1'>Ranking</p>
                    </div>
                  </div>
                  <div className='ctfpublic-dashboard-statscontainer'>
                    <div className='ctfpublic-dashboard-statsimg'>
                      <img
                        src={ReputationImg}
                        className='ctfpublic-dashboard-image'
                      />
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                      <p
                        style={{ marginBottom: "10px" }}
                        className='ctfpublic-dashboard-font1'
                      >
                        120
                      </p>
                      <p className='ctfpublic-dashboard-font1'>Reputation</p>
                    </div>
                  </div>
                  <div className='ctfpublic-dashboard-statscontainer'>
                    <div className='ctfpublic-dashboard-statsimg'>
                      <img
                        src={PointImg}
                        className='ctfpublic-dashboard-image'
                      />
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                      <p
                        style={{ marginBottom: "10px" }}
                        className='ctfpublic-dashboard-font1'
                      >
                        120
                      </p>
                      <p className='ctfpublic-dashboard-font1'>Points</p>
                    </div>
                  </div>
                  <div className='ctfpublic-dashboard-statscontainer'>
                    <div className='ctfpublic-dashboard-statsimg'>
                      <img
                        src={DaysImg}
                        className='ctfpublic-dashboard-image'
                      />
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                      <p
                        style={{ marginBottom: "10px" }}
                        className='ctfpublic-dashboard-font1'
                      >
                        120
                      </p>
                      <p className='ctfpublic-dashboard-font1'>Days</p>
                    </div>
                  </div>
                </div>
                <div className='ctfpublic-dashboard-listcontainer'>
                  <div className='ctfpublic-dashboard-list'>
                    <p className='ctfpublic-dashboard-heading ctfpublic-dashboard-font2'>
                      Badges
                    </p>

                    {listing.map((item) => (
                      <div className='ctfpublic-dashboard-badgecontainer'>
                        <img
                          src={BadgeImg}
                          className='ctfpublic-dashboard-badgeimg'
                        />
                        <div className='ctfpublic-dashboard-badgeinfo'>
                          <p className='ctf-dashboard-badgeheading ctfpublic-dashboard-font1'>
                            Advanced Defender
                          </p>
                          <p className='ctf-dashboard-badgetext ctfpublic-dashboard-font1'>
                            Completed 5 machines
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='ctfpublic-dashboard-list'>
                    <p className='ctfpublic-dashboard-heading ctfpublic-dashboard-font2'>
                      Challenges
                    </p>
                    <div className='ctfpublic-dashboard-challengecontainer'>
                      <div className='ctfpublic-dashboard-challengename'>
                        <p className='ctfpublic-dashboard-font1'>Category</p>
                        {listing2.map((item) => (
                          <p className='ctfpublic-dashboard-challengetext ctfpublic-dashboard-font1'>
                            {item.name}
                          </p>
                        ))}
                      </div>
                      <div className='ctfpublic-dashboard-challengeprogress'>
                        <p className='ctfpublic-dashboard-font1'>Completion</p>
                        {listing2.map((item) => (
                          <div className='ctfpublic-dashboard-progress'>
                            <div></div>
                          </div>
                        ))}
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

export default CTFPublicDashboard;
