import React, { Component } from "react";

import Navbar from "./pages/Navbar";

import "./CTFPublicLandingPage.css";
import MediaQuery from "react-responsive";
import "./CTFPublicParticipated.css";
import CTFPublicLandingPage from "./CTFPublicLandingPage";

const listing = [
  {
    name: "alpha",
    difficulty: "hard",
    rating: 4.7,
    solvers: 2345,
    actions: 300,
  },
  {
    name: "alpha",
    difficulty: "hard",
    rating: 4.7,
    solvers: 2345,
    actions: 300,
  },
  {
    name: "alpha",
    difficulty: "hard",
    rating: 4.7,
    solvers: 2345,
    actions: 300,
  },
  {
    name: "alpha",
    difficulty: "hard",
    rating: 4.7,
    solvers: 2345,
    actions: 300,
  },
];

class CTFPublicParticipated extends Component {
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
              <div className='ctfpublic-participated-maincontainer'>
                <p className='ctfpublic-participated-heading ctfpublic-participated-font1'>
                  Machines
                </p>
                <table id='participated'>
                  <tr>
                    <th>Name</th>
                    <th>Difficulty</th>
                    <th>Ratings</th>
                    <th>Solvers</th>
                    <th>Actions</th>
                  </tr>
                  {listing.map((item) => (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.difficulty}</td>
                      <td>{item.rating}</td>

                      <td style={{ color: "#02cccc" }}>{item.solvers}</td>
                      <td style={{ color: "#39903C" }}>{item.actions}</td>
                    </tr>
                  ))}
                </table>
                <p className='ctfpublic-participated-heading ctfpublic-participated-font1'>
                  Challenges
                </p>
                <table id='participated'>
                  <tr>
                    <th>Name</th>
                    <th>Difficulty</th>
                    <th>Ratings</th>
                    <th>Solvers</th>
                    <th>Actions</th>
                  </tr>
                  {listing.map((item) => (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.difficulty}</td>
                      <td>{item.rating}</td>

                      <td style={{ color: "#02cccc" }}>{item.solvers}</td>
                      <td style={{ color: "#39903C" }}>{item.actions}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CTFPublicParticipated;
