import React from "react";
import "./Card2.css";
import build from "../images/build.png";
import line from "../images/line.png";

function Card2({ head, desc }) {
  return (
    <>
      <div className="uni-comp-card">
        <div className="image-wrapper">
          <div className="building">
            <img src={build} />
          </div>
          <div className="line">
            <img src={line} />
          </div>
        </div>
        <div className="card-text">
          <div className="card-title">
            <p>{head}</p>
          </div>
          <div className="card-desc">
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card2;
