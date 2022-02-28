import React from "react";
import award1 from "../../../assets/media/trophy.svg";
import award2 from "../../../assets/media/award.svg";

import "./Awards.css";

const Awards = () => {
  return (
    <div className="awards">
      <div className="container">
        <div className="awards-title">
          <span>جوایز</span>
          <h3>جشنواره ملی معماری</h3>
        </div>
        <div className="items">
          <div className="award award-two">
            <div className="award-title">
              <img src={award2} alt="award2" />
              <p>نفر دوم</p>
            </div>
            

            <div className="desc">
              <span>دیپلم افتخار جشنواره</span>
              <small>به همراه اهدای رتبه ملی</small>
            </div>
          </div>
          <div className="award award-one">
            <div className="award-title">
              <img src={award1} alt="award1" />
              <p>نفر اول</p>
            </div>
            <div className="desc">
              <span>20 میلیون تومان</span>
              <small>به همراه دیپلم افتخار جشنواره </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
