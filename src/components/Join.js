import React, { Component } from "react";
import lineImg from "./images/underline.png";
import "./Join.css";

class Join extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="main-section" id="main">
          <div className="join-container">
            <div className="join-container-1">
              <div className="heading-container">Join Now</div>
              <div className="text-container">
                Take the invite chanllenge and join Hack The Box penetration
                testing labs today.
              </div>
              <div>
                <img src={lineImg} />
              </div>
              <div className="btn-container">
                <div className="btn-container-1">Learn more</div>
                <div className="btn-container-2">Join</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Join;
