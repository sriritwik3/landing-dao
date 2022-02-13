import React from "react";
import "./Banner.scss";
import sipto from "../../images/sipto.jpeg";

const Banner = () => {
  return (
    <div>
      <div className="banner container">
        <div className="banner__wrapper">
          <div className="title">
            <h2 className="title1">
              Further Interested to know <br /> how we work?
            </h2>
          </div>
          <div className="button">
            <button className="btn">How we work</button>
          </div>
        </div>
      </div>
      <div className="container work">
        <img src={sipto} alt="" />
      </div>
    </div>
  );
};

export default Banner;
