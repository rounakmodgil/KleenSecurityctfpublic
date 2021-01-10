import React from "react";
import Card from "./pages/Card";
import "./Features.css";
import plus from "./images/plus.png";
import rank from "./images/rank.png";
import career from "./images/careers.png";
import dedicated from "./images/dedicated.png";
import underline from "./images/asset.png";

export default function Home() {
  return (
    <>
      <div className="individuals" id="individuals">
        <div className="title">
          <div className="home-title">
            <h1 className="title-text"> Features</h1>
            <img src={underline} style={{ height: "50px", width: "180px" }} />
          </div>
        </div>
        <div className="cardcontainer">
          <div className="cardcontainerrow1">
            <Card
              img={plus}
              heading="Massive Lab"
              content="With new machines and challenges released on a weekly basis, you will learn hundreds of new "
            ></Card>

            <Card
              img={rank}
              heading="Ranks & Badges"
              content="Complete with other users to reach the top of the Hall of Fame and show off your progress with many"
            ></Card>
          </div>
          <div className="cardcontainerrow2">
            <Card
              img={career}
              heading="Careers"
              content="Apply for security-related job openings or use Hack The Box as a platform ro find talent for your own"
            ></Card>
            <Card
              img={dedicated}
              heading="Career"
              content="Rent your own private lab for your company, university, fully managed and tailored to your"
            ></Card>
          </div>
        </div>
      </div>
    </>
  );
}
