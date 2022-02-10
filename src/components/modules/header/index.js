import React from "react";
import Button from "../../elements/button/Button";
import Head from "../../elements/head/Head";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        {" "}
        <Head />
        <div className="counter">
          <h1 className="time">60:18:10:9</h1>
          <span className="title"> مانده تا شروع جشنواره معماری</span>
          <div className="text">
            <span>90:06:24:35</span>
            <small>مانده تا شروع جشنواره معماری</small>
          </div>
          <Button
            hasIcon
            hasBg
            rotate
            value=" در مورد جشنواره بیشتر بدانید"
            className="btn"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
