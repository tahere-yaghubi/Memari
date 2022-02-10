import React from "react";
import award1 from "../../../assets/media/trophy.svg";
import award2 from "../../../assets/media/award.svg";

import "./Awards.css";

const Awards = () => {
  return (
    <div className="awards">
      <div className="container">
        <div className="items">
          <div className="award two">
            <img src={award2} alt="award2" />
            <p>نفر دوم</p>

            <div className="desc">
              <span>دیپلم افتخار جشنواره</span>
              <small>به همراه اهدای رتبه ملی</small>
            </div>
          </div>
          <div className="award one">
            <img src={award1} alt="award1" />
            <p>نفر اول</p>
            <div className="desc">
              <span>20 میلیون تومان</span>
              <small>به همراه دیپلم افتخار جشنواره </small>
            </div>
          </div>
        </div>
        <div className="awards-title">
          <span>جوایز</span>
          <h3>جشنواره ملی معماری</h3>
        </div>
      </div>
    </div>
  );
};

export default Awards;
