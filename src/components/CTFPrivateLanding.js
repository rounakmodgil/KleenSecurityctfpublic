import React, { Component } from "react";
import "./CTFPrivateLanding.css";

class CTFPrivateLanding extends Component {
  state = {};
  render() {
    return (
      <div className='ctfprivatelanding-maincontainer'>
        <div className='ctfprivatelanding-heading'>
          <h1>Matching lorem ipsum with great companies</h1>
        </div>
        <div className='ctfprivatelanding-joinnow-container'>
          <div className='ctfprivatelanding-joinnow-container2'>
            <p>For Companies</p>
            <p className='ctfprivatelanding-description'>
              Lorem ipsum dolor sit amet, consec adipiscing eli consectetuer
              adipiscing eli cons. Lorem ipsum dolor sit amet, consec adipiscing
              eli cons
            </p>
            <div className='ctfprivatelanding-joinnow'>
              <p className='ctfprivatelanding-joinnow-text'>Join Now</p>
            </div>
          </div>
          <div className='ctfprivatelanding-joinnow-container2'>
            <p>For Hackers</p>
            <p className='ctfprivatelanding-description'>
              Lorem ipsum dolor sit amet, consec adipiscing eli consectetuer
              adipiscing eli cons. Lorem ipsum dolor sit amet, consec adipiscing
              eli cons
            </p>
            <div className='ctfprivatelanding-joinnow'>
              <p className='ctfprivatelanding-joinnow-text'>Join Now</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CTFPrivateLanding;
