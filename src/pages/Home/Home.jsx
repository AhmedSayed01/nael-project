import React from "react";
import "./Home.css";
import Work from "../Work/Work";
import Typed from "react-typed";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const Home = () => {
  // <p style={{ color: "#0E2337" }}>Crave Beauty</p>,
  //           <p style={{ color: "#ed7922" }}>Capture Moments</p>,
  const firstP = "Crave Beauty";
  const secondP = "Capture Moments";

  return (
    <div>
      <div className="container">
        <div className="home-info">
          <Typed
            strings={[
              `<span style="color: #0E2337">${firstP}</span>`,
              `<span style="color: #ed7922">${secondP}</span>`,
            ]}
            typeSpeed={150}
            backSpeed={100}
            loop
            style={{ fontSize: "2.9rem", fontWeight: "bold" }}
          />
          <p>
            In the dance of creativity, <br />
            ideas and imagination of content creation, <br />
            giving birth to Reel-world wonders.{" "}
          </p>
          <button>
            <h1>Explore</h1>{" "}
            <span>
              <BsFillArrowRightCircleFill />
            </span>
          </button>
        </div>
        <div className="blob">
          <div className="box1"></div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <Work />
      </div>
    </div>
  );
};

export default Home;
