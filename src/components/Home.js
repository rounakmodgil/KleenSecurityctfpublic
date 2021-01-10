import React, { Component } from "react";

import "./Home.css";
import mainlogo from "./images/mainlogo.png";
import fingerprint from "./images/fingerprint.png";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home-section" id="home">
        <img src={mainlogo} className="logo-home" />
        <div className="fin-home">
          <img src={fingerprint} className="img-home" />
          <p
            style={{
              color: "#FFFFFF",
              fontSize: 11,
              paddingTop: "8px",
            }}
          >
            Scroll Down
          </p>
        </div>
      </div>
    );
  }
}
export default Home;
