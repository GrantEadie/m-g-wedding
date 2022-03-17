import React from "react";
// import CeremonyDayLogo from "../../svgs/CeremonyDayLogo";
import Tile from "../details/Tile";
import Lodging from "../details/Lodging";
import Gallery from "../gallery/Gallery";

import "./main.css";

const Main = () => {
  return (
    <div>
      <div className="main-container">
        {/* <CeremonyDayLogo /> */}
        <div className="details">
          <Tile />
          <Lodging />
        </div>
        <a
          className="button"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.skalitude.com/"
        >
          Learn more about our venue
        </a>
      </div>
      <Gallery />
      <p className="footer-text">Thanks for helping us celebrate our love :)</p>
    </div>
  );
};

export default Main;
