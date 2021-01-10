import React from "react";
import "./timeline.css";

function timeline({ img, head, desc }) {
  return (
    <div class="wrapper">
      <div class="image-wrapper">
        <img src={img} className="timeline-img-holder" />
      </div>
      <div className="text-wrapper">
        <div className="head-wrapper">
          <h1 className="head-wrapper-text">{head}</h1>
        </div>
        <div className="content-wrapper">
          <p className="content-wrapper-text">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default timeline;
