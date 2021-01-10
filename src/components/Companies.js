import React from "react";
import "./Companies.css";
import rectangle from "./images/rectangle.png";
import { Button } from "./pages/Button";
import Unicard from "./pages/Card2";
import underline from "./images/asset.png";

function Companies() {
  return (
    <>
      <div className="background-comp" id="companies">
        <div className="comp-heading-wrapper">
          <div className="comp-heading-in-wrapper">
            <h1 className="comp-head-wrapper-text"> For Companies</h1>
            <img src={underline} style={{ height: "50px", width: "280px" }} />
          </div>
        </div>
        <div className="comp-content">
          <div className="comp-image-wrapper">
            <img src={rectangle} />
          </div>
          <div className="comp-text-wrapper">
            <div className="comp-head-wrapper">
              <p className="comp-head-text">
                Hack The Box provides a wealth of information and experience for
                your security team. Train your employees or find new talent
                among some of the world's top security experts using our
                recruitment system
              </p>
              <div className="comp-learnmore-container">
                <Button buttonStyle="btn--outline">Learn More</Button>
                <div className="comp-learnmore">
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
              <div className="comp-cards-container">
                <div className="comp-cont-row1">
                  <Unicard
                    head="Dedicated Labs"
                    desc="Private labs which allow you to choose who has access and which machines are available."
                  ></Unicard>
                  <Unicard
                    head="Teams"
                    desc="Post open positions for your company, or reach out directly to users that have opted-in."
                  ></Unicard>
                </div>
                <div className="comp-cont-row2">
                  <Unicard
                    head="Rankings"
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
export default Companies;
