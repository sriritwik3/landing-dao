import React, { useState } from "react";
import "./Header.scss";
import hamBurger from "../../images/icon-hamburger.svg";

const Header = () => {
  const [close, setClose] = useState(true);
  const handleClick = (e) => {
    e.preventDefault();
    setClose(!close);
  };
  return (
    <>
      <header>
        <nav className="navbar container">
          <div className="logo"></div>
          <ul className={close ? `nav-items` : `nav-items active`}>
            <li>About</li>
            <li>Services</li>
            <li>Roadmap</li>
            <li>Contact</li>
          </ul>
          <div className="hamBurger">
            <img src={hamBurger} alt="hamburger" onClick={handleClick} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
