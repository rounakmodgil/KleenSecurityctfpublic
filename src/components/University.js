import React from "react";
import "./University.css";
import rectangle from "./images/rectangle.png";
import { Button } from "./pages/Button";
import Unicard from "./pages/Card2";
import underline from "./images/asset.png";

function University() {
  return (
    <>
      <div className="background-uni" id="universities">
        <div className="uni-heading-wrapper">
          <div className="uni-heading-in-wrapper">
            <h1 className="uni-head-wrapper-text"> For Universities</h1>
            <img src={underline} style={{ height: "50px", width: "280px" }} />
          </div>
        </div>
        <div className="uni-content">
          <div className="uni-image-wrapper">
            <img src={rectangle} />
          </div>
          <div className="uni-text-wrapper">
            <div className="uni-head-wrapper">
              <p className="uni-head-text">
                Hack The Box provides a wealth of information and experience for
                your security team. Train your employees or find new talent
                among some of the world's top security experts using our
                recruitment system
              </p>
              <div className="uni-learnmore-container">
                <Button buttonStyle="btn--outline">Learn More</Button>
                <div className="learnmore">
                  <hr
                    style={{
                      borderColor: "#ff4d15",
                      height: "1px",
                      width: "500px",
                      marginLeft: "10px",
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="uni-cont-row1">
                  <Unicard
                    head="Dedicated Labs"
                    desc="Private labs which allow you to choose who has access and which machines are available."
                  ></Unicard>
                  <Unicard
                    head="Recruiting"
                    desc="Post open positions for your company, or reach out directly to users that have opted-in."
                  ></Unicard>
                </div>
                <div className="uni-cont-row2">
                  <Unicard
                    head="Sponsorship Opportunities"
                    desc="Get brand exposure to thousands of the worlds top security professionals."
                  ></Unicard>
                  <Unicard
                    head="Pro Labs"
                    desc="Active Directory labs mimicking a corporate environment with simulated user interaction."
                  ></Unicard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default University;
