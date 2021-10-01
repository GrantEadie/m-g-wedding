import React from "react";
import MGLogo from "../../svgs/MGLogo";
import Gallery from "../gallery/Gallery";

import "./main.css";

const Main = () => {
  return (
    <div>
      <div className="main-container">
        <MGLogo width="40rem" />
        <a className="button" rel="noopener noreferrer" target="_blank" href="https://www.skalitude.com/">
          Learn more about our venue
        </a>
      </div>
      <Gallery />
    </div>
  );
};

export default Main;
