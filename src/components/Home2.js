import React from "react";
import "./Home2.css";
import user from "./images/user.png";
import setting from "./images/setting.png";
import print from "./images/print.png";
import Timeline from "./pages/timeline";

function Home2() {
  return (
    <>
      <div className="background" id="individuals">
        <div className="darkcontainer">
          <Timeline img={user} head="200K" desc="Users"></Timeline>
          <Timeline img={setting} head="206" desc="Machines"></Timeline>
          <Timeline img={print} head="150" desc="Challenges"></Timeline>
        </div>
      </div>
    </>
  );
}

export default Home2;
