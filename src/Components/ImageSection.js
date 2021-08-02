import React from "react";
import about from "../img/about1.jpg";
import cv from "../img/cv.pdf";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am<span> Shahid Afridi</span>
        </h4>
        <p className="about-text">
          A very hard working, optimistic person who always focuses on being
          productive. Loved to learn new things around as well as adopt it.
          Committed to a positive attitude so that any situations can be handled
          wisely.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p className="cv">Address</p>
          </div>
          <div className="right-section">
            <p>: Shahid Afridi</p>
            <p>: 25</p>
            <p>: Bangladeshi</p>
            <p>: Bangla, English, Hindi</p>
            <p className="cv">: Dhaka, Bangladesh</p>
          </div>
        </div>
        <a className="btn" href={cv} download="CV.pdf">
          Download Cv
        </a>
      </div>
    </div>
  );
}

export default ImageSection;
