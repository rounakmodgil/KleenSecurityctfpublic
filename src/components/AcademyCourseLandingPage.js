import React, { Component } from "react";
import "./AcademyCourseLandingPage.css";
import circle from "./images/desimg.png";

import CourseComponent from "./CourseComponent";

const listing = [
  {
    id: 1,
    title1: "Rounak",
    title2: "ankit",
    courseheading: "Lorem Ipsum dolor Sitametal ipsum",
    coursetext:
      "Lorem ipsum dolor sit amet, consec adipiscing eli consectetuer adipiscing eli consectetuer adipiscing eli Lorem. eli consectetuer adipiscing eli Lorem. eli consectetuer",
  },
  {
    id: 2,
    title1: "Nithin",
    title2: "with Nmap",
    courseheading: "Lorem Ipsum dolor Sitametal ipsum",
    coursetext:
      "Lorem ipsum dolor sit amet, consec adipiscing eli consectetuer adipiscing eli consectetuer adipiscing eli Lorem. eli consectetuer adipiscing eli Lorem. eli consectetuer",
  },
  {
    id: 3,
    title1: "Network Enumeration3",
    title2: "with Nmap",
    courseheading: "Lorem Ipsum dolor Sitametal ipsum",
    coursetext:
      "Lorem ipsum dolor sit amet, consec adipiscing eli consectetuer adipiscing eli consectetuer adipiscing eli Lorem. eli consectetuer adipiscing eli Lorem. eli consectetuer",
  },
  {
    id: 4,
    title1: "Network Enumeration4",
    title2: "with Nmap",
    courseheading: "Lorem Ipsum dolor Sitametal ipsum",
    coursetext:
      "Lorem ipsum dolor sit amet, consec adipiscing eli consectetuer adipiscing eli consectetuer adipiscing eli Lorem. eli consectetuer adipiscing eli Lorem. eli consectetuer",
  },
  {
    id: 5,
    title1: "dsrhybgviuserhgiuer",
    title2: "with Nmap",
    courseheading: "Lorem Ipsum dolor Sitametal ipsum",
    coursetext:
      "Lorem ipsum dolor sit amet, consec adipiscing eli consectetuer adipiscing eli consectetuer adipiscing eli Lorem. eli consectetuer adipiscing eli Lorem. eli consectetuer",
  },
];

let renderListing = [];

class AcademyCourseLandingPage extends Component {
  handleExploreClick = () => {
    console.log("syugfauis");
  };
  render() {
    let temp = [];
    for (let i = 0; i < listing.length; i++) {
      if (i % 3 === 0 && i > 0) {
        renderListing.push(temp);
        temp = [];
      }
      temp.push(listing[i]);
    }
    if (temp.length !== 0) {
      renderListing.push(temp);
      temp = [];
    }
    return (
      <div className='academy-landing-maincontainer'>
        <div className='academy-landing-container'>
          <div className='academy-login-container'>
            <h1 className='academy-login-header'>Cyber Security Training</h1>
            <p className='academy-login-text'>
              Lorem ipsum dolor sit amet, consectetuer ipusn duo it amet,
              consectetuer ipsum.{" "}
            </p>
            <div style={{ textAlign: "center" }}>
              <h7 className='academy-signup-container'>Sign Up</h7>
            </div>
          </div>
        </div>
        <div className='academy-des'>
          <div className='academy-des-container'>
            <img src={circle} />
            <div className='academy-des-textcontainer'>
              <p className='academy-des-heading'>50+keufku</p>
              <p className='academy-des-text'>yjgfsu</p>
            </div>
          </div>
          <div className='academy-des-container'>
            <img src={circle} />
            <div className='academy-des-textcontainer'>
              <p className='academy-des-heading'>50+keufku</p>
              <p className='academy-des-text'>yjgfsu</p>
            </div>
          </div>
          <div className='academy-des-container'>
            <img src={circle} />
            <div className='academy-des-textcontainer'>
              <p className='academy-des-heading'>50+keufku</p>
              <p className='academy-des-text'>yjgfsu</p>
            </div>
          </div>
        </div>
        <p className='academy-courses-heading'>Cyber Security Courses</p>
        <div className='academy-courses-container'>
          {renderListing.map((item) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {item[0] !== undefined && (
                  <CourseComponent
                    title1={item[0].title1}
                    title2={item[0].title2}
                    courseheading={item[0].courseheading}
                    coursetext={item[0].coursetext}
                  />
                )}
                {item[1] !== undefined && (
                  <CourseComponent
                    title1={item[1].title1}
                    title2={item[1].title2}
                    courseheading={item[1].courseheading}
                    coursetext={item[1].coursetext}
                  />
                )}
                {item[2] !== undefined && (
                  <CourseComponent
                    title1={item[2].title1}
                    title2={item[2].title2}
                    courseheading={item[2].courseheading}
                    coursetext={item[2].coursetext}
                  />
                )}
              </div>
            );
          })}
        </div>
        <div className='academy-explore-container'>
          <div onClick={this.handleExploreClick} style={{ cursor: "pointer" }}>
            <p>
              Explore more <span style={{ color: "#ff4d14" }}>courses</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AcademyCourseLandingPage;
