import React, { Component } from "react";
import BackgrounfImg from "./images/ctfpubliclanding.png";
import "./CTFPublicLanding.css";

import { Link } from "react-router-dom";

class CTFPublicLanding extends Component {
  state = {};
  render() {
    return (
      <div className='ctfpublic-land-maincontainer'>
        <div className='ctfpublic-land-container1'>
          <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
            <p className='ctfpublic-land-headingor'>Kleen Security</p>
            <p className='ctfpublic-land-heading'>Hackerena</p>
            <p className='ctfpublic-land-text'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing eli
              consectetuer adipiscing eli consectetuer adipiscing eli Lorem
              ipsum dolor sit amet, adipiscing eli{" "}
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "25px",
              }}
            >
              <Link
                to='/dashboard'
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                <p className='ctfpublic-land-button'>hello</p>
              </Link>
              <p className='ctfpublic-land-button2'>hello</p>
            </div>
          </div>
          <img src={BackgrounfImg} className='ctfpublic-land-img' />
        </div>
        <p className='ctfpublic-land-heading2or'>Lorem ipsum dolor sit amet,</p>
        <p className='ctfpublic-land-heading2'>
          lorem consectetuer adipiscing lorem
        </p>
        <div className='ctfpublic-land-headingscontainer'>
          <div className='ctfpublic-land-container2'>
            <p className='ctfpublic-land-containerheading'>Lorem Ipsum</p>
            <p className='ctfpublic-land-containertext'>
              Lorem ipsum dolor sit lorem consectetuer adipiscing lorem rem
              consectet
            </p>
          </div>
          <div className='ctfpublic-land-container3'>
            <p className='ctfpublic-land-containerheading'>Lorem Ipsum</p>
            <p className='ctfpublic-land-containertext'>
              Lorem ipsum dolor sit lorem consectetuer adipiscing lorem rem
              consectet
            </p>
          </div>
          <div className='ctfpublic-land-container4'>
            <p className='ctfpublic-land-containerheading'>Lorem Ipsum</p>
            <p className='ctfpublic-land-containertext'>
              Lorem ipsum dolor sit lorem consectetuer adipiscing lorem rem
              consectet
            </p>
          </div>
          <div className='ctfpublic-land-container5'>
            <p className='ctfpublic-land-containerheading'>Lorem Ipsum</p>
            <p className='ctfpublic-land-containertext'>
              Lorem ipsum dolor sit lorem consectetuer adipiscing lorem rem
              consectet
            </p>
          </div>
        </div>
        <div className='ctfpublic-land-container1'>
          <img src={BackgrounfImg} className='ctfpublic-land-img' />
          <div style={{ paddingTop: "50px" }}>
            <p className='ctfpublic-land-headingor'>Kleen Security</p>
            <p className='ctfpublic-land-heading'>Hackerena</p>
            <p className='ctfpublic-land-text'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing eli
              consectetuer adipiscing eli consectetuer adipiscing eli Lorem
              ipsum dolor sit amet, adipiscing eli{" "}
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "25px",
              }}
            >
              <p className='ctfpublic-land-button'>hello</p>
            </div>
          </div>
        </div>

        <p className='ctfpublic-land-heading2or'>Lorem ipsum dolor sit amet,</p>
        <p className='ctfpublic-land-heading2'>
          lorem consectetuer adipiscing lorem
        </p>

        <div>
          <p className='ctfpublic-land-heading3or'>
            {">"} Lorem ipsum dolor sit lorem amet, consectetuer abcd
          </p>
          <p className='ctfpublic-land-text2'>
            Lorem ipsum dolor sit lorem amet, consectetuer abcd Lorem ipsum
            dolor sit lorem amet, consectetuer abcd Lorem ipsum dolor sit lorem
            amet, consectetuer abcd
          </p>
        </div>

        <div>
          <p className='ctfpublic-land-heading3or'>
            {">"} Lorem ipsum dolor sit lorem amet, consectetuer abcd
          </p>
          <p className='ctfpublic-land-text2'>
            Lorem ipsum dolor sit lorem amet, consectetuer abcd Lorem ipsum
            dolor sit lorem amet, consectetuer abcd Lorem ipsum dolor sit lorem
            amet, consectetuer abcd
          </p>
        </div>

        <div>
          <p className='ctfpublic-land-heading3or'>
            {">"} Lorem ipsum dolor sit lorem amet, consectetuer abcd
          </p>
          <p className='ctfpublic-land-text2'>
            Lorem ipsum dolor sit lorem amet, consectetuer abcd Lorem ipsum
            dolor sit lorem amet, consectetuer abcd Lorem ipsum dolor sit lorem
            amet, consectetuer abcd
          </p>
        </div>

        <div>
          <p className='ctfpublic-land-heading3or'>
            {">"} Lorem ipsum dolor sit lorem amet, consectetuer abcd
          </p>
          <p className='ctfpublic-land-text2'>
            Lorem ipsum dolor sit lorem amet, consectetuer abcd Lorem ipsum
            dolor sit lorem amet, consectetuer abcd Lorem ipsum dolor sit lorem
            amet, consectetuer abcd
          </p>
        </div>
      </div>
    );
  }
}

export default CTFPublicLanding;
