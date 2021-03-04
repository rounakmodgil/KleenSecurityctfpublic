import React, { Component } from "react";
import CourseImage from "./images/CourseBackground.png";
import Boost from "./images/boost.png";

import "./CourseComponent.css";

class CourseComponent extends Component {
  render() {
    return (
      <div className='course-component-maincontainer'>
        <div
          className='course-component-image'
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${CourseImage})`,
          }}
        >
          <div>
            <p className='course-component-name'>{this.props.title1} </p>
            <p className='course-component-name2'>{this.props.title2}</p>
          </div>
        </div>
        <div className='course-component-summary'>
          <div>
            <p className='course-component-summary-heading'>
              {this.props.courseheading}
            </p>
            <p className='course-component-summary-text'>
              {this.props.coursetext}{" "}
            </p>
          </div>
          <div className='course-component-footer'>
            <div className='course-component-difficulty'>
              <p>Medium</p>
            </div>
            <div className='course-component-enroll-container'>
              <div className='course-component-cost-container'>
                <p style={{ paddingRight: 10 }}>30</p>
                <img src={Boost} />
              </div>
              <div className='course-component-enroll'>
                <p>Enroll</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseComponent;
