import React, { Component } from "react";
import JoinTeamImg from "./images/teamjoin.png";
import CreateTeamImg from "./images/createteam.png";
import "./CTFPrivateJoinTeam.css";

class CTFPrivateJoinTeam extends Component {
  render() {
    return (
      <div className='ctfprivatejointeam-maincontainer'>
        <div className='ctfprivatejointeam-container'>
          <div className='ctfprivatejointeam-subcontainer'>
            <div className='ctfprivatejointeam-debug'>
              <div className='ctfprivatejointeam-imagecontainer'>
                <img src={JoinTeamImg} style={{ height: 150, width: 150 }} />
              </div>
            </div>
            <div className='ctfprivatejointeam-debug'>
              <p className='ctfprivatejointeam-heading'>Join a Team</p>
            </div>
            <div className='ctfprivatejointeam-debug'>
              <p className='ctfprivatejointeam-description'>
                Lorem ipsum dolor sit amet, consec adipiscing eli consectetuer
                adipiscing eli cons. Lorem ipsum dolor sit amet, consec
                adipiscing eli cons eli consectetuer adipiscing eli cons. Lorem
              </p>
            </div>
            <div className='ctfprivatejointeam-debug'>
              <div className='ctfprivatejointeam-joinnow'>
                <p className='ctfprivatejointeam-joinnow-text'>Join Now</p>
              </div>
            </div>
          </div>
          <div className='ctfprivatejointeam-subcontainer'>
            <div className='ctfprivatejointeam-debug'>
              <div className='ctfprivatejointeam-imagecontainer'>
                <img src={CreateTeamImg} style={{ height: 150, width: 300 }} />
              </div>
            </div>
            <div className='ctfprivatejointeam-debug'>
              <p className='ctfprivatejointeam-heading'>Make a Team</p>
            </div>
            <div className='ctfprivatejointeam-debug'>
              <p className='ctfprivatejointeam-description'>
                Lorem ipsum dolor sit amet, consec adipiscing eli consectetuer
                adipiscing eli cons. Lorem ipsum dolor sit amet, consec
                adipiscing eli cons eli consectetuer adipiscing eli cons. Lorem
              </p>
            </div>
            <div className='ctfprivatejointeam-debug'>
              <div className='ctfprivatejointeam-joinnow'>
                <p className='ctfprivatejointeam-joinnow-text'>Join Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CTFPrivateJoinTeam;
