import React, { Component } from "react";
import "./SubsComponent.css";

class SubsComponent extends Component {
  render() {
    return (
      <div className='subscomponent-maincontainer'>
        <div>
          <div className='subscomponent-name'>
            <p className='ctfpublic-subscomponent-font1'>Advance</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className='subscomponent-price'>
              <p className='ctfpublic-subscomponent-font2'>Rs 1000</p>
            </div>
          </div>
          <p className='subscomponent-text ctfpublic-subscomponent-font2'>
            built everyday
          </p>
          <p className='subscomponent-text ctfpublic-subscomponent-font2'>
            cancel anytime
          </p>
          <p className='subscomponent-text ctfpublic-subscomponent-font2'>
            Lorem Ipsum
          </p>
          <p className='subscomponent-text ctfpublic-subscomponent-font2'>
            Lorem Ipsum
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p className='subscomponent-sub ctfpublic-subscomponent-font3'>
              Subscribe
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SubsComponent;
