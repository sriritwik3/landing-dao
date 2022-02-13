import React from "react";
import "./Home.scss";
import rightMobile from "../../images/bg-pattern-intro-right-mobile.svg";
import rightDesktop from "../../images/bg-pattern-intro-right-desktop.svg";
import imageMobile from "../../images/image-intro-mobile.jpg";
import imageDesktop from "../../images/digital-currency.svg";
import leftMobile from "../../images/bg-pattern-intro-left-mobile.svg";
import leftDesktop from "../../images/bg-pattern-intro-left-desktop.svg";

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="hero__wrapper container">
          <div className="hero__content">
            <h1 className="title1">Welcome to Sipto DAO.</h1>
            <p className="hero__text">
              We try to bring back the exposure to investment products such as
              Equity Markets,Mutual Funds, Formal Credits and Crypto in the
              Indian market.
            </p>
            <button className="btn">Get Token</button>
          </div>
          <div className="hero__image">
            <img src={imageDesktop} alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
