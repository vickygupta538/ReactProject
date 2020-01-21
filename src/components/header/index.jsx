import React from "react";
import "./style.scss";
import logo from "../../assets/amazon_logo.svg";

const Header = props => {
  return (
    <header className="header" data-test="headerComponent">
      <div className="headingContainer">
        <img src={logo} alt="" />
        <div className="headingContent">Star Wars Character Search</div>
      </div>
    </header>
  );
};

export default Header;
