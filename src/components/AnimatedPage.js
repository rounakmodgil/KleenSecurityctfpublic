import React, { Component } from "react";
import "./AnimatedPage.css";
import greaterthan from "./images/greaterthan.png";

class AnimatedPage extends Component {
  render() {
    return (
      <div className='animated-page-container'>
        <div className='animated-page-title-container'>
          <div className='animated-page-title'>
            lorem ipsum lorem ipsum lorem ipsumlorem ipsum
          </div>
          <div className='animated-page-subtitle'>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem
            ipsum
          </div>
        </div>
        <div className='animated-container-background'>
          <div className='animated-container'>
            <img src={greaterthan} />
          </div>
        </div>
        <div className='animated-page-parts-container'>
          <div className='animated-page-parts-text'>
            <span className='animated-page-parts-large'>01</span> Courses
          </div>
          <div className='animated-page-parts-text'>
            <span className='animated-page-parts-large'>02</span> Dedicated labs
          </div>
          <div className='animated-page-parts-text'>
            <span className='animated-page-parts-large'>03</span> Public labs
          </div>
        </div>
      </div>
    );
  }
}

export default AnimatedPage;
