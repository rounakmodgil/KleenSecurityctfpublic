import React, { Component } from "react";

import "./CTFPrivateJoinTeamForm.css";

class CTFPrivateCreateTeam extends Component {
  state = {
    active: false,
    value: "",
  };

  handleTextChange(text) {
    this.setState({ value: text });

    if (text !== "") {
      this.setState({ active: true });
    } else {
      this.setState({ active: false });
    }
  }

  render() {
    return (
      <div className='jointeam-maincontainer'>
        <div>
          <div className='jointeam-container'>
            <p className='jointeam-heading'>Join An Existing Team</p>
            <p className='jointeam-subheading'>
              In order to participate in CTF you need to b part of a team
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: 35,
              }}
            >
              <input type='text' id='jointeamform' />
            </div>
            <div id='float-label'>
              <input
                type='email'
                value={this.state.value}
                onChange={(e) => this.handleTextChange(e.target.value)}
              />

              <label
                className={this.state.active ? "Active" : ""}
                htmlFor='email'
              >
                E-mail
              </label>
            </div>
            <div className='jointeam-submit'>Submit</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CTFPrivateCreateTeam;
