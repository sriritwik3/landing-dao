import React from "react";
import "./Footer.scss";
import Fb from "../../images/icon-facebook.svg";
import Insta from "../../images/icon-instagram.svg";
import Twitter from "../../images/icon-twitter.svg";
import Pininterest from "../../images/icon-pinterest.svg";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer">
            <div className="footer-header">
              <div className="logo">
                {" "}
                <h2>SiptoDAO</h2>{" "}
              </div>
              <div className="social-media-icons">
                <img src={Fb} alt="" />
                <img src={Insta} alt="" />
                <img src={Twitter} alt="" />
                <img src={Pininterest} alt="" />
              </div>
            </div>
            <div className="footer-menu">
              <div className="our-company">
                <h4>Our Company</h4>
                <ul>
                  <li>How we work</li>
                  <li>Why insure</li>
                  <li>View Plans</li>
                  <li>Reviews</li>
                </ul>
              </div>
              <div className="our-company">
                <h4>Help</h4>
                <ul>
                  <li>FAQ</li>
                  <li>Terms of use</li>
                  <li>Privacy Policy</li>
                  <li>Cookies</li>
                </ul>
              </div>
              <div className="our-company">
                <h4>Contact</h4>
                <ul>
                  <li>How we work</li>
                  <li>Why insure</li>
                  <li>View Plans</li>
                  <li>Reviews</li>
                </ul>
              </div>
              <div className="our-company">
                <h4>Others</h4>
                <ul>
                  <li>How we work</li>
                  <li>Why insure</li>
                  <li>View Plans</li>
                  <li>Reviews</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      ;{" "}
    </div>
  );
};

export default Footer;
