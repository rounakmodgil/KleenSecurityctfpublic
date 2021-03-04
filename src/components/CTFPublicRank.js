import React, { Component } from "react";

import Navbar from "./pages/Navbar";

import "./CTFPublicLandingPage.css";
import MediaQuery from "react-responsive";
import CTFPublicLandingPage from "./CTFPublicLandingPage";

import "./CTFPublicRank.css";

const listing = [
  {
    rank: 1,
    name: "tom scott",
    country: "india",
    reputation: 260,
    points: 2003,
  },
  {
    rank: 2,
    name: "tom scott",
    country: "india",
    reputation: 260,
    points: 2003,
  },
  {
    rank: 3,
    name: "tom scott",
    country: "india",
    reputation: 260,
    points: 2003,
  },
  {
    rank: 4,
    name: "tom scott",
    country: "india",
    reputation: 260,
    points: 2003,
  },
  {
    rank: 5,
    name: "tom scott",
    country: "india",
    reputation: 260,
    points: 2003,
  },
  {
    rank: 6,
    name: "tom scott",
    country: "india",
    reputation: 260,
    points: 2003,
  },
];

class CTFPublicRank extends Component {
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
              <div className='ctfpublic-rank-maincontainer'>
                <div>
                  <div className='ctfpublic-rank-periodcontainer'>
                    <p className='ctfpublic-rank-period ctfpublic-rank-font2'>
                      All Time
                    </p>
                  </div>
                  <table id='rankings'>
                    <tr>
                      <th>Rank</th>
                      <th>Name</th>
                      <th>Country</th>
                      <th>Reputation</th>
                      <th>Points</th>
                    </tr>
                    {listing.map((item) => (
                      <tr>
                        <td>{item.rank}</td>
                        <td>{item.name}</td>
                        <td>{item.country}</td>
                        <td>{item.reputation}</td>
                        <td>{item.points}</td>
                      </tr>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CTFPublicRank;
