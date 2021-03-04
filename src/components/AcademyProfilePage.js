import React, { Component } from "react";
import "./AcademyProfilePage.css";

class AcademyProfilePage extends Component {
  state = {
    profile: true,
  };
  render() {
    return (
      <div className='academy-profile-main-container'>
        <div className='academy-profile-container'>
          <div className='academy-profile-menu-container'>
            <div className='academy-profile-menu-container2'>
              <div className='academy-profile-menu-profile'></div>
              <div className='academy-profile-menu-name'>
                <p>YOYO</p>
              </div>

              <div className='academy-profile-menu-list-container'>
                <div
                  className='academy-profile-menu-list'
                  onClick={() => this.setState({ profile: true })}
                  style={{
                    backgroundColor:
                      this.state.profile === true ? "#2d2d2d" : "#121212",
                  }}
                >
                  <p>Profile</p>
                </div>
                <div
                  className='academy-profile-menu-list'
                  onClick={() => this.setState({ profile: false })}
                  style={{
                    backgroundColor:
                      this.state.profile === false ? "#2d2d2d" : "#121212",
                  }}
                >
                  <p>Account</p>
                </div>
                <div className='academy-profile-menu-list'>
                  <p>Logout</p>
                </div>
              </div>
            </div>
          </div>
          <div className='academy-profile-information-container'>
            {this.state.profile === true && (
              <div>
                <div className='academy-profile-information-header'>
                  <p className='academy-profile-information-header1'>Profile</p>
                  <p className='academy-profile-information-header2'>
                    Add information about youself
                  </p>
                </div>
                <div className='academy-profile-information-inputmain-container'>
                  <div className='academy-profile-information-inputcontainer'>
                    <p>Name:</p>
                    <input type='text' />
                  </div>
                  <div className='academy-profile-information-inputcontainer'>
                    <p>Last Name:</p>
                    <input type='text' />
                  </div>
                  <div className='academy-profile-information-inputcontainer'>
                    <p>Profession:</p>
                    <input type='text' />
                  </div>
                </div>
                <div className='academy-profile-information-submit'>
                  <div className='academy-profile-information-save'>
                    <p>Save</p>
                  </div>
                </div>
              </div>
            )}

            {this.state.profile === false && (
              <div>
                <div className='academy-profile-information-header'>
                  <p className='academy-profile-information-header1'>Account</p>
                  <p className='academy-profile-information-header2'>
                    Edit account and password here
                  </p>
                </div>
                <div className='academy-profile-information-inputmain-container'>
                  <div className='academy-profile-information-inputcontainer'>
                    <p>Email:</p>
                    <input type='text' />
                  </div>
                  <div className='academy-profile-information-inputcontainer'>
                    <p>User Name:</p>
                    <input type='text' />
                  </div>
                  <div className='academy-profile-information-inputcontainer'>
                    <p>Password:</p>
                    <input type='text' />
                  </div>
                  <div className='academy-profile-information-inputcontainer'>
                    <p>Confirm Password:</p>
                    <input type='text' />
                  </div>
                </div>
                <div className='academy-profile-information-submit'>
                  <div className='academy-profile-information-save'>
                    <p>Save</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default AcademyProfilePage;
