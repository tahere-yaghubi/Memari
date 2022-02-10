import React from "react";
import Button from "../button/Button";
import logo from "../../../assets/media/logo.svg";
import "./Head.css";

const Head = () => {
  return (
    <div className="head">
      <Button value="ثبت اثر در جشنواره" border className="head-button" />
      <img src={logo} alt="logo" />
      <div className="options">
        <ion-icon name="search-outline"></ion-icon>
        <h1>FA</h1>
      </div>
    </div>
  );
};

export default Head;
