import React, { Component } from "react";

import "./CTFPrivateCreateTeam.css";

class CTFPrivateCreateTeam extends Component {
  state = {};
  render() {
    return (
      <div className='createteam-maincontainer'>
        <div>
          <div className='createteam-container'>
            <p className='createteam-heading'>Create A Team</p>
            <p className='createteam-subheading'>
              In order to participate in CTF you need to b part of a team
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: 35,
              }}
            >
              <input type='text' />

              <input type='text' />
              <input type='text' />
            </div>
            <div className='createteam-submit'>Submit</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CTFPrivateCreateTeam;
