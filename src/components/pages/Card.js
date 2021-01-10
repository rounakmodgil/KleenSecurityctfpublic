import React from "react";
import "./Card.css";

function Card({ img, heading, content }) {
  return (
    <>
      <div className="cardcont">
        <div className="image-wrapper">
          <img src={img} />
        </div>
        <div className="text">
          <div className="headingwrapper">
            <p className="headingwrappertext">{heading}</p>
          </div>
          <div className="contentwrapper">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
