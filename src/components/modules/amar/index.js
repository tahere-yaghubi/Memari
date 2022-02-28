import React from "react";
import box1 from "../../../assets/media/checked.svg";
import box2 from "../../../assets/media/download.svg";
import "./Amar.css";

const Amar = () => {
  return (
    <div className="amar">
      <div className="container">
        <div className="inner">
          <h3>آمار آثار دریافتی</h3>
        </div>

        <div className="boxes">
          <div className="box two">
            <img src={box2} alt="download" />
            <span>1530</span>
            <small>اثر دانلود شده</small>
          </div>
          <div className="box one">
            <img src={box1} alt="checked" />
            <span>5629</span>
            <small>اثر قبول شده</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amar;
