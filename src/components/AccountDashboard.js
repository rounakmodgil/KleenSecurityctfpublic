import React, { Component } from "react";
import Boost from "./images/boost.png";
import CourseComponent from "./CourseComponent";
import "./AccountDashboard.css";

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
    id: 3,
    title1: "Network Enumeration3",
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
];

class AccountDashboard extends Component {
  render() {
    return (
      <div className='dashboard-main-container'>
        <div className='dashboard-background-container'>
          <div>
            <div className='dashboard-account-logo'></div>
            <p>Kumar Ankit</p>
            <div className='dashboard-account-boost'>
              <p>30</p>
              <img src={Boost} />
            </div>
          </div>
        </div>
        <div className='dashboard-progress-container'>
          <div className='dashboard-progress-percentage'>
            <div>
              <div className='dashboard-progress-background1'>
                <p>30%</p>
              </div>
              <p>lorem ipsum</p>
            </div>
          </div>
          <div className='dashboard-progress-percentage'>
            <div>
              <div className='dashboard-progress-background1'>
                <p>30%</p>
              </div>
              <p>lorem ipsum</p>
            </div>
          </div>
          <div className='dashboard-progress-percentage'>
            <div>
              <div className='dashboard-progress-background1'>
                <p>30%</p>
              </div>
              <p>lorem ipsum</p>
            </div>
          </div>
        </div>
        <div>
          <p className='dashboard-wishlist-text'>
            Wishlist <span style={{ color: "#ff4d15" }}>Courses</span>
          </p>
          <div className='dashboard-wishlist-container'>
            {listing.map((item) => {
              return (
                <CourseComponent
                  title1={item.title1}
                  title2={item.title2}
                  courseheading={item.courseheading}
                  coursetext={item.coursetext}
                />
              );
            })}
          </div>
        </div>
        <div>
          <p className='dashboard-wishlist-text'>
            Recommended <span style={{ color: "#ff4d15" }}>Courses</span>
          </p>
          <div className='dashboard-wishlist-container'>
            {listing.map((item) => {
              return (
                <CourseComponent
                  title1={item.title1}
                  title2={item.title2}
                  courseheading={item.courseheading}
                  coursetext={item.coursetext}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default AccountDashboard;
