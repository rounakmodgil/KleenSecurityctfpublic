import React, { Component } from "react";

import Navbar from "./pages/Navbar";

import "./CTFPublicLandingPage.css";
import MediaQuery from "react-responsive";
import CTFPublicLandingPage from "./CTFPublicLandingPage";
import { Link } from "react-router-dom";

import "./CTFPublicMachines.css";

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

class CTFPublicMachines extends Component {
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
              <div className='ctfpublic-machines-maincontainer'>
                <div className='ctfpublic-machines-headercontainer'>
                  <p className='ctfpublic-machines-header ctfpublic-machines-font1'>
                    Active Machines
                  </p>
                  <p className='ctfpublic-machines-header ctfpublic-machines-font1'>
                    Retired Machines
                  </p>
                  <p className='ctfpublic-machines-header ctfpublic-machines-font1'>
                    To-do
                  </p>
                </div>
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
                      <td style={{ color: "#ff4d15" }}>
                        <div className='ctfpublic-machines-actioncontainer'>
                          <Link
                            to='/machinedetails'
                            style={{ textDecoration: "none", color: "#ff4d15" }}
                          >
                            <p className='ctfpublic-machines-actiontext ctfpublic-participated-font2'>
                              Join
                            </p>
                          </Link>
                          <p className='ctfpublic-machines-actiontext ctfpublic-participated-font2'>
                            To-do
                          </p>
                          <p className='ctfpublic-machines-actiontext ctfpublic-participated-font2'>
                            Report
                          </p>
                        </div>
                      </td>
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

export default CTFPublicMachines;
