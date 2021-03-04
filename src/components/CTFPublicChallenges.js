import React, { Component } from "react";
import Navbar from "./pages/Navbar";

import "./CTFPublicLandingPage.css";
import MediaQuery from "react-responsive";
import "./CTFPublicChallenges.css";
import CTFPublicLandingPage from "./CTFPublicLandingPage";

import { Link } from "react-router-dom";

const listing = [
  {
    pointers: 30,
    name: "alphatech",
    solvers: 2345,
    likes: 400,
    dislikes: 250,

    difficulty: "easy",
  },
  {
    pointers: 30,
    name: "alphatech",
    solvers: 2345,
    likes: 400,
    dislikes: 250,
    difficulty: "easy",
  },
  {
    pointers: 30,
    name: "alphatech",
    solvers: 2345,
    likes: 400,
    dislikes: 250,
    difficulty: "easy",
  },
  {
    pointers: 30,
    name: "alphatech",
    solvers: 2345,
    likes: 400,
    dislikes: 250,
    difficulty: "easy",
  },
  {
    pointers: 30,
    name: "alphatech",
    solvers: 2345,
    likes: 400,
    dislikes: 250,
    difficulty: "easy",
  },
];

class CTFPublicChallenges extends Component {
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
              <div className='ctfpublic-challenges-maincontainer'>
                <div className='ctfpublic-challenges-headingcontainer'>
                  <p className='ctfpublic-challenges-heading ctfpublic-challenges-font1'>
                    Active Challenges
                  </p>
                  <p className='ctfpublic-challenges-heading ctfpublic-challenges-font1'>
                    Retired Challenges
                  </p>
                </div>
                <div>
                  <table id='challenges'>
                    <tr>
                      <th>Pointers</th>
                      <th>Name</th>
                      <th>Solvers</th>
                      <th>Likes/dislikes</th>
                      <th>Difficulty</th>
                      <th>Date</th>
                    </tr>
                    {listing.map((item) => (
                      <tr>
                        <td>{item.pointers}</td>
                        <td>{item.name}</td>
                        <td>{item.solvers}</td>
                        <td>
                          {item.likes} / {item.dislikes}
                        </td>
                        <td>{item.difficulty}</td>
                        <Link
                          to='/challengedetails'
                          style={{
                            textDecoration: "none",
                            color: "#ffffff",
                            cursor: "pointer",
                          }}
                        >
                          <td>join</td>
                        </Link>
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

export default CTFPublicChallenges;
