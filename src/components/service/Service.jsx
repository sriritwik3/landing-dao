import React from "react";
import "./Service.scss";
import Bitcoin1 from "../../images/bitcoin-1.svg";
import Bitcoin2 from "../../images/bitcoin2.svg";
import CryptoFlower from "../../images/cryptoflower.svg";

const Service = () => {
  return (
    <div>
      <div className="we-are-different">
        <div className="container">
          <h2 className="title1 title1--mod">We are different</h2>
          <div className="we-are-different__content">
            <div className="snappy">
              <img src={Bitcoin1} alt="" />
              <h3>Great Market Value</h3>
              <p>
                Knowledge, Awareness and Accessibility of savings and
                investments with these alternative assets are very high among
                audience.
              </p>
            </div>
            <div className="snappy">
              <img src={Bitcoin2} alt="" />
              <h3>Verified Mining Process</h3>
              <p>
                Get some help to start small-recurring daily/weekly/monthly
                investments. The entire process of mining is verified and
                trustworthy.
              </p>
            </div>
            <div className="snappy">
              <img src={CryptoFlower} alt="" />
              <h3>Fastest Miner</h3>
              <p>
                And guess what each and every part of the mining you do here is
                as quicker as the speed of light.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
