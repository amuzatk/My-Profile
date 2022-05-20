import React from "react";

import "./Intro.css";
// import Me from "./Images/img1-rmbg.png";
// import Me from "./Images/img4.jpeg";
import Me from "./Images/img2.png";

export default function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Kazeem Amuzat</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Front-End Engineer</div>
              <div className="i-title-item">React JS Expert</div>
              <div className="i-title-item">JavaScript Guru</div>
            </div>
          </div>
          <div>
            <p className="i-desc">
              I am a Front-End Engineer with experience in JavaScript and
              React-JS Technologies, I have ditched out application development
              using the aforementioned stacks with experience in project
              management (PM).
            </p>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
}
